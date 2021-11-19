APP_NAME=
GITHUB_SHA?=latest
LOCAL_TAG=$(APP_NAME):$(GITHUB_SHA)
REMOTE_TAG=$(DOCKERHUB_USERNAME)/$(LOCAL_TAG)
HEROKU_REMOTE_TAG=registry.heroku.com/$(APP_NAME)

check-app-name:
ifndef APP_NAME
	$(error Please set APP_NAME)
endif

.PHONY: build
build: check-app-name
	export DOCKER_BUILDKIT=1 && \
	docker build -f Dockerfile.prod -t $(LOCAL_TAG) .

.PHONY: run-build
run-build: check-app-name
	docker run -d -p 8080:8080 -e PORT=8080 --name ankara-store-app --rm $(LOCAL_TAG)

.PHONY: push
push: check-app-name
	echo "tagging docker image..."
	docker tag $(LOCAL_TAG) $(REMOTE_TAG)
	echo "pushing image to dockerhub..."
	docker push $(REMOTE_TAG)

.PHONY: heroku-push
heroku-push: check-app-name
	echo "pulling new container image..."
	docker pull $(REMOTE_TAG)
	echo "removing old container image"
	-docker rmi $(HEROKU_REMOTE_TAG)
	echo "tagging new image..."
	docker tag $(REMOTE_TAG) $(HEROKU_REMOTE_TAG)
	echo "pushing new image to heroku..."
	docker push $(HEROKU_REMOTE_TAG)

IMAGE_ID=`docker inspect $(HEROKU_REMOTE_TAG) --format={{.Id}}`

.PHONY: deploy
deploy: check-app-name
	echo "releasing new image..."
	@curl --write-out '%{http_code}' --fail --silent --output /dev/null \
		-X PATCH https://api.heroku.com/apps/$(APP_NAME)/formation \
		-H 'Content-Type:application/json' \
		-H 'Accept:application/vnd.heroku+json; version=3.docker-releases' \
		-H "Authorization:Bearer $(HEROKU_API_KEY)" \
		-d '{"updates": [{"type": "web","docker_image": "$(IMAGE_ID)"}]}'

.PHONY: run-deploy
run-deploy: check-app-name
	@$(MAKE) deploy IMAGE_ID=$(IMAGE_ID)

.PHONY: check-app-health
check-app-health: check-app-name
	chmod u+r+x ./health-check.sh
	@sh -c "./health-check.sh https://$(APP_NAME).herokuapp.com/"