/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Header from "../../components/Header";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import LoginPage from "../LoginPage";
import NotFoundPage from "../NotFoundPage";

/*
 * The root container of the whole application
 * Where the magic begin
 */

export default class App extends React.Component {
  render() {
    return <div>
      <Header title="Maintenance Requests" />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="" component={NotFoundPage} />
        </Switch>
      </Container>
    </div>;
  }
}
