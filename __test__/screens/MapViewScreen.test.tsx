import MapViewScreen from "../src/screens/MapViewScreen";
import React from "react";
import renderer from "react-test-renderer";

describe("<MapViewScreen />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<MapViewScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
