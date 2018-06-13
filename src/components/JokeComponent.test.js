import React from "react";
import { shallow } from "enzyme";
import JokeComponent from "./JokeComponent";

it("renders without crashing", () => {
  shallow(<JokeComponent />);
});
