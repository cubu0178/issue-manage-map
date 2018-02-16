import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <h1>
      Hello world!
    </h1>
  </div>
);

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
