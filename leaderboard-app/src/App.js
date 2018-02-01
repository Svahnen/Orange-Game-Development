import React, { Component } from 'react';
// import logo from './logo.svg';
import bomb from './bomb.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={bomb} className="App-logo" alt="logo" />
          <h1 className="App-title">Survival of the Fastest</h1>
        </header>
        <p className="App-intro">
          Start Game Here.
        </p>
        <a href="https://orange-dev.duckdns.org:8080/"><code>START GAME</code></a>
      </div>
    );
  }
}

export default App;
