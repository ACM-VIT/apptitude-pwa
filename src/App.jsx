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
import Sponsers from "./containers/Sponsers/Sponsers";
import Prizes from "./containers/Sponsers/Prizes";
import AboutUs from "./containers/Sponsers/AboutUs";

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
          <Route path="/joinTeam" component={JoinTeam} />
          <Route path="/createTeam" component={CreateTeam} />
          <Route path="/teamCreated" component={TeamCreated} />
          <Route path="/teamJoined" component={TeamJoined} />
          <Route path="/sponsers" component={Sponsers} />
          <Route path="/prizes" component={Prizes} />
          <Route path="/aboutUs" component={AboutUs} />
        </Switch>
      </div>
    );
  }
}
export default App;
