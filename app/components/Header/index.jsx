import React from "react";
import PropTypes from "prop-types";

import { Button, Icon, Container } from "semantic-ui-react";

import HeaderMenu from "./headerMenu";
import css from "./header.css";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" }
];

const MenuIcon = () =>
  (<Icon name="content" className={css["menu-icon"]} size="large" />);

class Header extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <Container className={css.container}>
          <h1 className={css.title}>{this.props.title}</h1>
          <HeaderMenu items={menuItems} pathname="/" />
          <MenuIcon />
          <Button color="blue" className={css.login}>Log in</Button>
        </Container>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;

