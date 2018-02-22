import React from "react";
import { shallow } from "enzyme";
import App from "../index.jsx";


describe("<App />", () => {
  const app = shallow(<App />);

  it("has a router Switch component", () => {
    expect(app.find("Switch").length).toBe(1);
  });
});
