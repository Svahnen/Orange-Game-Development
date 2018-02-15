import React, { Component } from 'react'
import bomb from './bomb.png'
import './App.css'
import List from './List.js'
import ButtonStart from './ButtonStart'



class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header shine'>
          {/* <img src={bomb} className="App-logo" alt="logo" /> */}
          <h1 className='App-title'>SURVIVAL {<img src={bomb} className='App-logo' alt='logo' />}F THE FASTEST</h1>
        </header>
        <br />
        <ButtonStart />
        <List />
      </div>
    )
  }
}

export default App
