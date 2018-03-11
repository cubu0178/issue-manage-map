import React from "react";
import PropTypes from "prop-types";

import { Button, Icon, Container } from "semantic-ui-react";

import HeaderMenu from "./headerMenu";
import css from "./header.css";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" }
];

class Header extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <Container className={css.container}>
          <h1 className={css.title}>{this.props.title}</h1>
          <HeaderMenu items={menuItems} pathname="/" />
          <Button>Log in</Button>
          <Icon name="content" />
        </Container>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;

