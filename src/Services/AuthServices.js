import axios from 'axios'

function CheckToken () {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    return true
  } else {
    return false
  }
}
function GetToken () {
  const token = window.sessionStorage.getItem('token')
    return ({
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `bearer ${token}`
      }
  })
}


export {CheckToken, GetToken}
