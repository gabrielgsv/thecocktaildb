import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import history from "./history";

import Router from "./Router";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
