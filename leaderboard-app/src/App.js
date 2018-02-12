import React, { Component } from 'react'
import bomb from './bomb.png'
import './App.css'
import ButtonStart from './ButtonStart'


let fakeServerData = {
 team: [
    {
      time: 1215,
      name: 'Team Strawberry',
      ID: '1'
    },
    {
      time: 1725,
      name: 'Team Pear',
      ID: '2'
    },
    {
      time: 1615,
      name: 'Team Melon',
      ID: '3'
    },
    {
      time: 1744,
      name: 'Team Grape',
      ID: '4'
    },
    {
      time: 2515,
      name: 'Team Banana',
      ID: '5'
    },
    {
      time: 1115,
      name: 'Team Orange',
      ID: '6'
    },
    {
      time: 2725,
      name: 'Team Ninjas',
      ID: '7'
    },
    {
      time: 1635,
      name: 'Team Alex',
      ID: '8'
    },
    {
      time: 1744,
      name: 'Team JSON',
      ID: '9'
    },
    {
      time: 2515,
      name: 'Team LOL',
      ID: '10'
    }
  ]
}





class App extends Component {

  render() {

    // Sort function of array.time
    function CompareForSort(first, second) {
      let firstTime = first.time
      let secondTime = second.time
      if (firstTime === secondTime)
        return 0;
      if (firstTime < secondTime)
        return -1;
      else
        return 1;
    }

    // Convert second to minutes and add :
    function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

    // Sorts and then maps server data
    let list = fakeServerData.team.sort(CompareForSort).map(team => {
      return(
        <div key={team.ID} className="Table">
          <h2>{team.name}</h2><h1>{fmtMSS(team.time)}</h1>
        </div>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={bomb} className="App-logo" alt="logo" />
          <h1 className="App-title">SURVIVAL OF THE FASTEST</h1>
        </header>
        <br />
        <ButtonStart />
        {list}
      </div>
    )
  }
}

export default App;
