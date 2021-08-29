import React from 'react';
import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Hero from './Hero';

let container = null;

beforeEach(() => {
  // setup
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  // clean after each test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("component hero renders correctly",() => {
  act(() => {
    render(<Hero></Hero>, container);
  })

  expect(container).toBeInTheDocument();
})