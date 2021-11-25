/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// Containers
import LoginSection from "./containers/LoginSection/LoginSection";
import PhoneNo from "./containers/OtpSection/PhoneNo/PhoneNo";
import JoinTeam from "./containers/JoinTeam/JoinTeam";
import CreateTeam from "./containers/CreateTeam/CreateTeam";
import TeamCreated from "./containers/TeamCreated/TeamCreated";
import TeamJoined from "./containers/TeamJoined/TeamJoined";
import Sponsers from "./containers/Sponsers/Sponsers";
import Prizes from "./containers/Sponsers/Prizes";
import AboutUs from "./containers/Sponsers/AboutUs";
import ProfileSection from "./containers/ProfileSection/ProfileSection";
// import ProbStatements from "./containers/ProblemStatements/ProbStatements";
// import FeatureGenerator from "./containers/FeatureGenerator/FeatureGenerator";
import Countdown from "./containers/Countdown/Countdown";
import SubmissionPage from "./containers/SubmissionFormSection/Form";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// Styling
import "./App.css";

const App = () => {
  const [authLogin, setAuthLogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("AM")) {
      setAuthLogin(true);
    }
  }, []);
  console.log(authLogin);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginSection} />
        <ProtectedRoute
          path="/profile"
          exact
          component={ProfileSection}
          redirect="/"
        />
        <ProtectedRoute path="/phone" exact component={PhoneNo} redirect="/" />
        <ProtectedRoute path="/sponsers" component={Sponsers} redirect="/" />
        <ProtectedRoute path="/prizes" component={Prizes} redirect="/" />
        <ProtectedRoute path="/aboutus" component={AboutUs} redirect="/" />
        <ProtectedRoute path="/jointeam" component={JoinTeam} redirect="/" />
        <ProtectedRoute
          path="/createteam"
          component={CreateTeam}
          redirect="/"
        />
        <ProtectedRoute
          path="/teamcreated"
          component={TeamCreated}
          redirect="/"
        />
        <ProtectedRoute
          path="/teamjoined"
          component={TeamJoined}
          redirect="/"
        />
        <ProtectedRoute
          path="/submission"
          component={SubmissionPage}
          redirect="/"
        />
        {/* <ProtectedRoute path="/problems" component={ProbStatements} redirect="/" /> */}
        {/* <ProtectedRoute path="/features" component={FeatureGenerator} redirect="/" /> */}
        <ProtectedRoute path="/countdown" component={Countdown} redirect="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
