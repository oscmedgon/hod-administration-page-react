import axios from 'axios';
import {GetToken} from './AuthServices';

export function GetUserDashboard () {
  return axios.get('/api/dashboard/user', GetToken());
}
export function GetArticlesDashboard () {
  return axios.get('/api/dashboard/article', GetToken());
}
export function AddNewArticle (data) {
  return axios.post('/api/article/new', data, GetToken());
}
export function GetArticle (id) {
  return axios.get(`/api/article/${id}`, GetToken());
}
export function ModifyArticle (id, data) {
  return axios.put(`/api/article/${id}/modify`, data, GetToken());
}
export function LoginService (data) {
  data.username = data.username.toLowerCase();
  return axios.post('/api/admin/login', data, GetToken());
}
export function GetDashboard () {
  return axios.get('/api/dashboard', {}, GetToken());
}
export function uploadArticleImage (data) {
  return axios.post('/api/upload', data, GetToken());
}
export function checkUserToken (data) {
  return axios.post('/api/admin/check', data, GetToken());
}
