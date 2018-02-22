/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { BrowserRouter } from "react-router-dom";

import App from "./containers/App";

const MOUNT_NODE = document.getElementById("app");

// Wrapper for the render function in react
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    MOUNT_NODE
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NewApp = require("./containers/App");
    render(NewApp);
  });
}
