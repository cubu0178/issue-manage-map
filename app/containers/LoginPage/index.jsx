/**
 * The page that users first meet.
 */

import React from "react";
import css from "./login.css";

import { Button, Container } from "semantic-ui-react";

/*
 * The login page
 */
export default class LoginPage extends React.Component {
  render() {
    return (<article id="form">
      <form>
        <Container>
          <label htmlFor="uname">
            Username
          </label>
          <input type="text" placeholder="Enter Username" name="uname"
            required />
          <br />
          <label htmlFor="psw">
            Password
          </label>
          <input type="password" placeholder="Password" name="pass"
            required />
          <br />
          <label>
            <input id="chkbox" type="checkbox" checked="checked" name="remember" />
            Remember Me?
          </label>
          <br />
          <span className="uname">
            Forgot
            <a href="#">
              username?
            </a>
          </span>
          <br />
          <span className="psw">
            Forgot
            <a href="#">
              password?
            </a>
          </span>
          <br />
          <a href="/">
            <Button className={css.button} type="button" id="cancelbtn">
              Cancel
            </Button>
          </a>
          <Button className={[css.button, css.submit]} id="submit_button" color="green" type="submit">
            Login
          </Button>
          <br />

        </Container>
      </form>
    </article>);
  }
}
