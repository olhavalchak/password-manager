import axios from 'axios';
import { root } from './config';

export const tasks = Object.freeze({
  createTask: (taskInfo) => axios.post(`${root}/tasks`, taskInfo),
  getTaskInfo: (id) => axios.get(`${root}/tasks/${id}`),
  getTasks: () => axios.get(`${root}/tasks`),
  updateTask: (taskId, taskInfo) => axios.put(`${root}/tasks/${taskId}`, taskInfo),
  deleteTask: (taskId) => axios.delete(`${root}/tasks/${taskId}`),
});
