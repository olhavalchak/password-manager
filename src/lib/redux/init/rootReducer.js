import { combineReducers } from 'redux';
import { authReducer as auth, passwordInfoReducer as passwordInfo } from '../reducers';

export const rootReducer = combineReducers({
  auth,
  passwordInfo,
});
