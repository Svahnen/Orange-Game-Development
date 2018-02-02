import React, { Component } from 'react'
// import logo from './logo.svg';
import bomb from './bomb.png'
import './App.css'
// import Table from'./Table.js'

function Table(props) {
  return <div className="Table">
    <h1>1</h1> <h2>23:55</h2> <p>TEAM ORANGE</p> </div>

}

let fakeServerData = {
  team: [
    {
      name: 'Team Orange',
      time: '12:15',
      placement: '1'
    },
    {
      name: 'Team Pear',
      time: '15:25',
      placement: '2'
    },
    {
      name: 'Team Melon',
      time: '16:15',
      placement: '3'
    },
    {
      name: 'Team Grape',
      time: '17:44',
      placement: '4'
    },
    {
      name: 'Team Banana',
      time: '25:15',
      placement: '5'
    }
  ]

}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
    )
  }
}

export default App;
