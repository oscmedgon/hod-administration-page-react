import axios from 'axios'
import {GetToken} from './AuthServices'

function GetUserDashboard () {
  return axios.get('/api/dashboard/user', GetToken())
}
function GetArticlesDashboard () {
  return axios.get('/api/dashboard/article', GetToken())
}
function AddNewArticle (data) {
  return axios.post('/api/article/new', data, GetToken())
}
function GetArticle (id) {
  return axios.get(`/api/article/${id}`, GetToken())
}
function ModifyArticle (id, data) {
  return axios.put(`/api/article/${id}/modify`, data, GetToken())
}
function LoginService (data) {
  data.username = data.username.toLowerCase()
  return axios.post('/api/admin/login', data, GetToken())
}
function GetDashboard () {
  return axios.get('/api/dashboard', {}, GetToken())
}
function uploadArticleImage (data) {
  return axios.post('/api/upload', data)
}
export {GetUserDashboard, GetArticlesDashboard, AddNewArticle, GetArticle, ModifyArticle, LoginService, GetDashboard, uploadArticleImage}
