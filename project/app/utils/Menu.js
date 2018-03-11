import PropTypes from "prop-types";

const MenuPropType = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  })),
  pathname: PropTypes.string.isRequired,
};

export { MenuPropType };
