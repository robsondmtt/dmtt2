import axios from "axios";
import { parseCookies } from "nookies";
import Cookies from 'js-cookie'

export function getAPIClient(ctx?: any) {
  // const { 'nextauth-token': token } = parseCookies(ctx)
  const token = Cookies.get('admin-auth')
  
  const api = axios.create({
    baseURL: 'http://localhost:3001'
  })

  api.interceptors.request.use(config => {
    
    return config;
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}