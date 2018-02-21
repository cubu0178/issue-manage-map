import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "react-hot-loader";
import App from "./containers/App";

// Wrapper for the render function in react
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("app")
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
