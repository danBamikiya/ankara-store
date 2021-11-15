import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import UIProvider from "./store/UIProvider";

ReactDOM.render(
  <UIProvider>
    <App />
  </UIProvider>,
  document.getElementById("root")
);
