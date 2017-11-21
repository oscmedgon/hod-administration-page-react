import axios from 'axios'

function GetUserDashboard () {
  return axios.get('/api/dashboard/user')
}
function GetArticlesDashboard () {
  return axios.get('/api/dashboard/article')
}
export {GetUserDashboard, GetArticlesDashboard}
