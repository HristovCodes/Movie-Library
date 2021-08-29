import React from 'react';
import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import SearchForm from './SearchForm';

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

it("component search form renders correctly",() => {
  act(() => {
    render(<SearchForm></SearchForm>, container);
  })

  expect(container).toBeInTheDocument();
})