import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from 'notistack';

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
