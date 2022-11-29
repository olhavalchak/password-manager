import { passwordTypes } from '../types';

const initialState = {
  data: [],
  error: null,
};

export const passwordInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case passwordTypes.CREATE_INFO: {
      const newPassword = {
        id: action.payload.id,
        website: action.payload.website,
        login: action.payload.login,
        password: action.payload.password,
        isShown: false,
      };
      return {
        ...state,
        data: [...state.data, newPassword],
        error: null,
      };
    }
    case passwordTypes.UPDATE_INFO:
      return {
        ...state,
        data: state.data.map((password) => (password.id === action.payload.id
          ? action.payload : password)),
        error: null,
      };
    case passwordTypes.DELETE_INFO:
      return {
        ...state,
        data: state.data.filter((password) => password.id !== action.payload),
        error: null,
      };
    case passwordTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case passwordTypes.FETCH_INFO:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
