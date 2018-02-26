import React, { Component } from 'react'



// Convert second to minutes and add :
function convertToMin (s) { return (s - (s %= 60)) / 60 + (s > 9 ? ':' : ':0') + s }

// Sort function of array.time
function CompareForSort (first, second) {
  let firstTime = first.time
  let secondTime = second.time
  if (firstTime === secondTime)
    return 0
  if (firstTime < secondTime)
    return -1
  else
        return 1
}

class List extends Component {
  constructor () {
    super()
    this.state = {
      teams: []
    }
  }

  componentWillMount () {
    fetch('http://10.7.2.168:3000/getteams')
        .then((res) => res.json())
        .then(data => {
          this.setState({teams: data})
        })
  }

  render () {
        // Sorts and then maps server data
    let list = this.state.teams.sort(CompareForSort).map((team, index) => {
      return (
        <div key={index} className='Table'>
          <h3>{team.name}</h3> <h2>{convertToMin(team.time)}</h2>
        </div>
      )
    })
    return list
  }
}

export default List
