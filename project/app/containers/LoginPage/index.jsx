/**
 * The page that users first meet.
 */

import React from "react";
import css from "./login.css";

import { Form, Message, Segment } from "semantic-ui-react";

/*
 * The login page
 */
export default class LoginPage extends React.Component {
  render() {
    return (
      <div className={css["login-container"]}>
        <style>{`
              body > div,
              body > div > div {
                  height: 100%;
              }

              body > div > div > div {
                  height: calc(100% - 100px);
              }
            `}</style>
        <div className={css.login}>
          <h2>
            Login to your account
          </h2>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />

              <Form.Button color="green" fluid size="large">Login</Form.Button>

              <hr />

              <Form.Group width="equal" to="/" className={css.cancel}>
                <Form.Button color="red" fluid>Cancel</Form.Button>

                <span className={css.forgot}>
                  Forgot{" "}
                  <a href="#">
                    password?
                  </a>
                </span>
              </Form.Group>

            </Segment>
          </Form>
          <Message>
            New to us? <a href="#">Sign Up</a>
          </Message>
        </div>
      </div>
    );
  }
}
