import React from "react";
import PropTypes from "prop-types";

import { FaBars } from "react-icons/lib/fa";
import css from "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <div className={css.container}>
          <FaBars />
          {this.props.title}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;

