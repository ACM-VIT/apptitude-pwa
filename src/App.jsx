import React, { Component } from "react";

// Containers
import LoginSection from "./containers/LoginSection/LoginSection";

// Styling
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginSection />
      </div>
    );
  }
}
export default App;
