import React, { Component } from "react";
import FrontCard from "./components/FrontCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FrontCard />
        </header>
      </div>
    );
  }
}

export default App;
