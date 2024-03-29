#!/bin/bash

# Check the health of the web service every thirty-seconds
# for up to ten minutes, until it responds with HTTP status 200.

fail_count=1
while true; do
    http_status=$(curl --write-out %{http_code} --silent --output /dev/null "$1")

    if [ "$http_status" -eq "200" ]; then
        echo "$(date -u) health check succeeded to $1"
        exit 0
    else
        if [ "$fail_count" -eq "21" ]; then
            echo "$(date -u) health check failed (status $http_status) to $1"
            exit 2
        else
            echo "$(date -u) health check ${fail_count}/20 to $1"
            sleep 30
            fail_count=$(($fail_count + 1))
        fi
    fi
done
