import React, { Component } from "react";
import chuck from "../assets/images/chuck-machine-guns-web.png";
import "../assets/css/App.css";
import ErrorBoundary from "./ErrorBoundary";
import JokeContainer from "../containers/JokeContainer";
import RouletteContainer from "../containers/RouletteContainer";

const Header = () => (
  <header className="header">
    <h1 className="title">Chuck-Roulette</h1>
    <img src={chuck} className="header-image" alt="chuck" />
  </header>
);

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <Header />
          <main>
            <JokeContainer />
            <RouletteContainer />
          </main>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
