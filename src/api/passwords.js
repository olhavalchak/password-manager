import axios from 'axios';
import { root } from './config';

export const passwords = Object.freeze({
  createPasswordInfo: (passwordInfo) => axios.post(`${root}/passwords`, passwordInfo),
  getPasswordInfo: (id) => axios.get(`${root}/passwords/${id}`),
  getPasswords: () => axios.get(`${root}/passwords`),
  updatePasswordInfo: (passwordId, passwordInfo) => axios.put(`${root}/passwords/${passwordId}`, passwordInfo),
  deletePasswordInfo: (passwordId) => axios.delete(`${root}/passwords/${passwordId}`),
});
