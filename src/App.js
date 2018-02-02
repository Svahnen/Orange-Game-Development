import React, { Component } from 'react';
// import logo from './logo.svg';
import bomb from './bomb.png';
import './App.css';
import Table from'./Table.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={bomb} className="App-logo" alt="logo" />
          <h1 className="App-title">SURVIVAL OF THE FASTEST</h1>
        </header>
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <p className="App-intro">
          <a href="https://orange-dev.duckdns.org:8080/"><code>START GAME</code></a>
        </p>
        <p className="App-intro">
          <a href="https://orange-dev.duckdns.org:8080/"><code>JOIN GAME</code></a>
        </p>
      </div>
    );
  }
}

export default App;
