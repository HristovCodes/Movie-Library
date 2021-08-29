import React from "react";
import { render, act } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import Nav from "./Nav";

let container = null;

beforeEach(() => {
  // setup
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // clean after each test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("component nav renders correctly", () => {
  act(() => {
    render(<Nav></Nav>, container);
  });

  expect(container).toBeInTheDocument();
});
