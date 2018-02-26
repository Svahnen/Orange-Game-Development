/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

const serverIp = 'http://orange-dev.duckdns.org:3000'

let createNewGame = function () {
  console.log('Started')

  fetch(serverIp + '/startgame/' + teamName() + '/' + timeNow(), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    }
  })
  setTimeout(() => console.log('Done'), 1000)
}

// Get local time and add 30 min
function timeNow () {
  let oldDateObj = new Date()
  let newDateObj = new Date(oldDateObj.getTime() + 30 * 60000)
  let d = newDateObj
  let h = (d.getHours() < 10 ? '0' : '') + d.getHours()
  let m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
  let localTime = h + ':' + m
  return localTime
}

function teamName () {
  let name = document.getElementById('teamname').value
  return name
}
