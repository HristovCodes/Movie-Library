import React from "react";
import { render, act } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

let container = null;
const initialState = new Array();
const mockStore = configureStore();
let store, wrapper;

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

it("root component app renders correctly", () => {
  store = mockStore(initialState);

  act(() => {
    render(
      <Provider store={store}>
        <App></App>
      </Provider>,
      container
    );
  });

  expect(container).toBeInTheDocument();
});
