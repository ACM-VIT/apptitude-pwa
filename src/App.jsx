import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Containers
import LoginSection from "./containers/LoginSection/LoginSection";
import PhoneNo from "./containers/OtpSection/PhoneNo";
import otp from "./containers/OtpSection/Otp";

// Styling
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/otp" exact component={otp} />
          <Route path="/phone" exact component={PhoneNo} />
          <Route path="/" exact component={LoginSection} />
        </Switch>
      </div>
    );
  }
}
export default App;
