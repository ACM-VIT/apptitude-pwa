/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, redirect, ...rest }) => {
  const key = sessionStorage.getItem("AM");

  return (
    <Route
      {...rest}
      render={(props) => (key ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default ProtectedRoute;
