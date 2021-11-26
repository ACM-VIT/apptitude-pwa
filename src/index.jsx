import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { SnackbarProvider } from "notistack";
import App from "./App";
// import * as serviceWorker from "../public/serviceworker";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <SnackbarProvider maxSnack={2}>
    <React.StrictMode>{app}</React.StrictMode>
  </SnackbarProvider>,
  document.getElementById("root")
);

// serviceWorker.register();
