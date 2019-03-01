import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

export default props => {
  return (
    // props.children allows us wrap other components with the component created here (i.e. wrap App with Provider)
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
