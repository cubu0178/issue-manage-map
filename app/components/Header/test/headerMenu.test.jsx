import React from "react";
import { shallow } from "enzyme";
import HeaderMenu from "../headerMenu.jsx";

const items = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" },
  { name: "Login", path: "/login/" }
];

describe("<HeaderMenu />", () => {
  it("should nothing active with the wrong path", () => {
    const wrapper = shallow(
      <HeaderMenu
        items={items}
        pathname="/foo/"
      />);
    console.log(wrapper.debug());
    expect(wrapper.find({ active: true }).length).toBe(0);
  });

  it("should active with the right path", () => {
    const wrapper = shallow(
      <HeaderMenu
        items={items}
        pathname="/about/"
      />);
    console.log(wrapper.debug());

    expect(wrapper.find({ name: "About" }).prop("active")).toBeTruthy();
  });
});
