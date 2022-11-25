import axios from 'axios';
import { root } from './config';

export const auth = Object.freeze({
  registerUser: (userInfo) => axios.post(`${root}/users`, userInfo),
  getUserInfo: (id) => axios.get(`${root}/users/${id}`),
  loginUser: (userInfo) => axios.post(`${root}/signin`, userInfo),
});
