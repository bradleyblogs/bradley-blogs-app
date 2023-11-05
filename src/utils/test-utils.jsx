import { render as renderer } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import blogReducer from "../features/blog/blogSlice";

export function render(
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: { blog: blogReducer }, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  Wrapper.propTypes = {
    children: PropTypes.any,
  };

  return { store, ...renderer(ui, { wrapper: Wrapper, ...renderOptions }) };
}
