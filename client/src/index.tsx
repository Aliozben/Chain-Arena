import React from "react";
import ReactDOM from "react-dom";
import {ToastProvider} from "react-toast-notifications";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Axios from "axios";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={3000}
      placement="bottom-left"
    >
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
