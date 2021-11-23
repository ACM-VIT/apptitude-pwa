import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Containers
import LoginSection from "./containers/LoginSection/LoginSection";
import PhoneNo from "./containers/OtpSection/PhoneNo";
import JoinTeam from "./containers/JoinTeam/JoinTeam";
import CreateTeam from "./containers/CreateTeam/CreateTeam";
import TeamCreated from "./containers/TeamCreated/TeamCreated";
import TeamJoined from "./containers/TeamJoined/TeamJoined";
import otp from "./containers/OtpSection/Otp";
import ProfileSection from "./containers/ProfileSection/ProfileSection";

// Styling
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/profile" exact component={ProfileSection} />
          <Route path="/otp" exact component={otp} />
          <Route path="/phone" exact component={PhoneNo} />
          <Route path="/" exact component={LoginSection} />
          <Route path="/jointeam" component={JoinTeam} />
          <Route path="/createteam" component={CreateTeam} />
          <Route path="/teamcreated" component={TeamCreated} />
          <Route path="/teamjoined" component={TeamJoined} />
        </Switch>
      </div>
    );
  }
}
export default App;
