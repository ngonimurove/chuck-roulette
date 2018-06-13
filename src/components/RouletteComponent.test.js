import React from "react";
import { shallow } from "enzyme";
import RouletteComponent from "./RouletteComponent";

const options = {
  disableLifecycleMethods: true
};

it("renders without crashing", () => {
  shallow(<RouletteComponent />, options);
});
