/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

let deleteGame = function () {
  console.log('deleting game')
  fetch(serverIp + '/deletecurrentgame/', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    }
  })
  fetch(serverIp + '/deletelocations/', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    }
  })
  console.log('deleted')
}
