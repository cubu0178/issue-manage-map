import React from "react";

import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { MenuPropType } from "../../utils/Menu";

class HeaderMenu extends React.Component {
  render() {
    const items = this.props.items;
    const pathname = this.props.pathname;

    return (<Container>
      <Menu size="large" secondary>
        {items.map((item) => {
          const active = pathname === item.path;
          return <Menu.Item as={Link}
            name={item.name} to={item.path} key={item.path}
            active={active} />;
        })}
      </Menu>
    </Container>);
  }
}

HeaderMenu.propTypes = MenuPropType;

export default HeaderMenu;
