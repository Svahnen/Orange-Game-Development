import React, { Component } from 'react'
import bomb from './bomb.png'
import './App.css'


let fakeServerData = {
  team: [
    {
      name: 'Team Orange',
      time: '12:15',
      ID: '1'
    },
    {
      name: 'Team Pear',
      time: '15:25',
      ID: '2'
    },
    {
      name: 'Team Melon',
      time: '16:15',
      ID: '3'
    },
    {
      name: 'Team Grape',
      time: '17:44',
      ID: '4'
    },
    {
      name: 'Team Banana',
      time: '25:15',
      ID: '5'
    }
  ]

}





class App extends Component {

  render() {


    // Run throu the fakeServerData object and map out the data in a div. 
    // Would like to have this in a function to keep render cleaner.
    const list = fakeServerData.team.map(team => {
      return(
        <div key={team.ID} className="Table">
        <h1>{team.ID}</h1> <h2>{team.time}</h2> <p>{team.name}</p> 
        </div>
      )
    
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={bomb} className="App-logo" alt="logo" />
          <h1 className="App-title">SURVIVAL OF THE FASTEST</h1>
        </header>
        <p className="App-intro">
          <a href="https://orange-dev.duckdns.org:8080/"><code>START GAME</code></a>
        </p>
        <p className="App-intro">
          <a href="https://orange-dev.duckdns.org:8080/"><code>JOIN GAME</code></a>
        </p>
        {list} 
      
        
      </div>
    )
  }
}

export default App;
