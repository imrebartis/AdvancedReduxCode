import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );

  return (
    // props.children allows us wrap other components with the component created here (i.e. wrap App with Provider)
    <Provider store={store}>{children}</Provider>
  );
};
