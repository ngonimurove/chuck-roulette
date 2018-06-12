import React, { Component } from "react";
import chuck from "../assets/images/chuck-machine-guns-web.png";
import "../assets/css/App.css";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <header className="header">
            <h1 className="title">Chuck-Roulette</h1>
            <img src={chuck} className="header-image" alt="chuck" />
          </header>
          <main>
            <div className="joke">
              <p>
                Chuck Norris is the problem to all the answers to your problems!
              </p>
            </div>
            <div className="roulette">
              <button className="roulette-button">HIT ME!</button>
              <p className="instructions">
                Click on “Hit me!” to get a random Chuck Norris joke, or select
                one of the categories below.
              </p>
              <div className="categories">
                <button className="joke-category">Explicit</button>
                <button className="joke-category">Dev</button>
                <button className="joke-category">Movie</button>
                <button className="joke-category">Food</button>
                <button className="joke-category">Celebrity</button>
                <button className="joke-category">Science</button>
                <button className="joke-category">Sport</button>
                <button className="joke-category">Political</button>
                <button className="joke-category">Religion</button>
                <button className="joke-category">Animal</button>
                <button className="joke-category">Music</button>
                <button className="joke-category">Travel</button>
                <button className="joke-category">Career</button>
                <button className="joke-category">Money</button>
                <button className="joke-category">Fashion</button>
              </div>
            </div>
          </main>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
