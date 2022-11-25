import { tasksTypes } from '../types';
import { api } from '../../../api';

export const tasksActions = Object.freeze({
  createTask: (taskInfo) => ({
    type: tasksTypes.CREATE_TASK,
    payload: taskInfo,
  }),
  updateTask: (taskInfo) => ({
    type: tasksTypes.UPDATE_TASK,
    payload: taskInfo,
  }),
  fetchTasks: (tasks) => ({
    type: tasksTypes.FETCH_TASKS,
    payload: tasks,
  }),
  deleteTask: (taskId) => ({
    type: tasksTypes.DELETE_TASK,
    payload: taskId,
  }),
  setFetchingError: (error) => ({
    type: tasksTypes.SET_TASKS_ERROR,
    payload: error,
  }),
  createTaskAsync: (taskInfo) => async (dispatch) => {
    try {
      const response = await api.tasks.createTask({ task: taskInfo, isFinished: false });
      dispatch(tasksActions.createTask(response.data));
    } catch (err) {
      dispatch(tasksActions.setFetchingError(err.message));
    }
  },
  updateTaskAsync: (taskId, taskInfo) => async (dispatch) => {
    try {
      const response = await api.tasks.updateTask(taskId, taskInfo);
      dispatch(tasksActions.updateTask(response.data));
    } catch (err) {
      dispatch(tasksActions.setFetchingError(err.message));
    }
  },
  getTasksAsync: () => async (dispatch) => {
    try {
      const response = await api.tasks.getTasks();
      dispatch(tasksActions.fetchTasks(response.data));
    } catch (err) {
      dispatch(tasksActions.setFetchingError(err.message));
    }
  },
  deleteTaskAsync: (taskId) => async (dispatch) => {
    try {
      await api.tasks.deleteTask(taskId);
      dispatch(tasksActions.deleteTask(taskId));
    } catch (err) {
      dispatch(tasksActions.setFetchingError(err.message));
    }
  },
});
