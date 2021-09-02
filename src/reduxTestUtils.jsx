// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore, createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import { moviesReducer } from "./reducers";

function render(
  ui,
  {
    preloadedState,
    store = createStore(moviesReducer, preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
