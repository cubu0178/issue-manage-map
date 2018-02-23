/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import NotFoundPage from "../NotFoundPage";

import style from "./app.css";

/*
 * The root container of the whole application
 * Where the magic begin
 */

export default class App extends React.Component {
  render() {
    return <div className={style.container}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="" component={NotFoundPage} />
      </Switch>
    </div>;
  }
}