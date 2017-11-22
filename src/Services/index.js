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
function GetArticle (id) {
  return axios.get(`/api/article/${id}`)
}
function ModifyArticle (id, data) {
  return axios.put(`/api/article/${id}/modify`, data)
}

export {GetUserDashboard, GetArticlesDashboard, AddNewArticle, GetArticle, ModifyArticle}
