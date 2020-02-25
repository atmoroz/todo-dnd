import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import "@atlaskit/css-reset";

import ColumnsStore from "./stores/ColumnsStore";
import TaskStore from "./stores/TaskStore";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <Provider
    store={{
      ColumnsStore,
      TaskStore
    }}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
