import React, { Component } from "react";

import style from "./app.css";

/*
 * The root container of the whole application
 * Where the magic begin
 */

export default class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <h1>Hello, world.</h1>
        <p>Hello</p>
      </div>
    );
  }
}
