/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Header from "../../components/Header";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import LoginPage from "../LoginPage";
import NotFoundPage from "../NotFoundPage";

import css from "./app.css";

/*
 * The root container of the whole application
 * Where the magic begin
 */

export default class App extends React.Component {
  render() {
    const RoutedHeader = withRouter(props => <Header title="Issue Management Map" {...props} />);

    return <div>
      <RoutedHeader />
      <Container className={css.main}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </div>;
  }
}
