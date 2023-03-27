import LocationList from "../../src/screens/LocationList";
import React from "react";
import renderer from "react-test-renderer";

describe("<LocationList />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<LocationList />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
