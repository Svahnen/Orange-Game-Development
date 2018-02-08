import React, { Component } from 'react'
import bomb from './bomb.png'
import './App.css'
import List from './List.js'



class App extends Component {

  render() {


    return (
      <div className="App">
        <header className="App-header shine">
          {/* <img src={bomb} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">SURVIVAL {<img src={bomb} className="App-logo" alt="logo" />}F THE FASTEST</h1>
        </header>
        <p className="App-intro">
          <a href="https://orange-dev.duckdns.org:8080/"><code>START GAME</code></a>
        </p>
        <p className="App-intro">
          <a href="https://orange-dev.duckdns.org:8080/"><code>JOIN GAME</code></a>
        </p>

        <List />
      
        
      </div>
    )
  }
}

export default App;
