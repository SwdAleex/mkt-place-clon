import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { StateProvider } from "./Container/StateProvider";
import reducer, { initialState } from "./Container/reducer";

ReactDOM.render(
  <React.StrictMode>
    {/* initialState => What does the Data Layer looks like at the beginning */}
    {/* reducer => How do the Date Layer is going to be manipulated */}

    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
