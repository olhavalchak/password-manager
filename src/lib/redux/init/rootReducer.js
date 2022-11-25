import { combineReducers } from 'redux';
import { authReducer as auth, tasksReducer as tasks } from '../reducers';

export const rootReducer = combineReducers({
  auth,
  tasks,
});
