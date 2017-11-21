import axios from 'axios'

function GetUserDashboard () {
  return axios.get('/api/dashboard/user')
}
function GetArticlesDashboard () {
  return axios.get('/api/dashboard/article')
}
function AddNewArticle (data) {
  return axios.post('/api/article/new', data)
}
export {GetUserDashboard, GetArticlesDashboard, AddNewArticle}
