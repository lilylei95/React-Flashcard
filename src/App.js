import React, { Component } from "react";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FrontCard />
          <BackCard />
        </header>
      </div>
    );
  }
}

export default App;
