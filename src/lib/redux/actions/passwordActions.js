import { passwordTypes } from '../types';
import { api } from '../../../api';

export const passwordActions = Object.freeze({
  createPasswordInfo: (taskInfo) => ({
    type: passwordTypes.CREATE_INFO,
    payload: taskInfo,
  }),
  updatePasswordInfo: (taskInfo) => ({
    type: passwordTypes.UPDATE_INFO,
    payload: taskInfo,
  }),
  fetchPasswordInfo: (tasks) => ({
    type: passwordTypes.FETCH_INFO,
    payload: tasks,
  }),
  deletePasswordInfo: (taskId) => ({
    type: passwordTypes.DELETE_INFO,
    payload: taskId,
  }),
  setFetchingError: (error) => ({
    type: passwordTypes.SET_ERROR,
    payload: error,
  }),
  createPasswordInfoAsync: (passwordInfo) => async (dispatch) => {
    try {
      const response = await api.passwords.createPasswordInfo(passwordInfo);
      dispatch(passwordActions.createPasswordInfo(response.data));
    } catch (err) {
      dispatch(passwordActions.setFetchingError(err.message));
    }
  },
  updatePasswordInfoAsync: (passwordId, passwordInfo) => async (dispatch) => {
    try {
      const response = await api.passwords.updatePasswordInfo(passwordId, passwordInfo);
      dispatch(passwordActions.updatePasswordInfo(response.data));
    } catch (err) {
      dispatch(passwordActions.setFetchingError(err.message));
    }
  },
  getPasswordInfoAsync: () => async (dispatch) => {
    try {
      const response = await api.passwords.getPasswords();
      dispatch(passwordActions.fetchPasswordInfo(response.data));
    } catch (err) {
      dispatch(passwordActions.setFetchingError(err.message));
    }
  },
  deletePasswordInfoAsync: (passwordId) => async (dispatch) => {
    try {
      await api.passwords.deletePasswordInfo(passwordId);
      dispatch(passwordActions.deletePasswordInfo(passwordId));
    } catch (err) {
      dispatch(passwordActions.setFetchingError(err.message));
    }
  },
});
