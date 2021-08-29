import React from 'react';
import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import App from './App';

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

it("root component app renders correctly",() => {
  act(() => {
    render(<App></App>, container);
  })

  expect(container).toBeInTheDocument();
})