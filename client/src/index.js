//External Lib Import
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

//Internal Lib Import
import App from "./App";
import "./assets/css/bootstrap.min.css";
import "./assets/css/main.css";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
