import { tasksTypes } from '../types';

const initialState = {
  data: [],
  error: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case tasksTypes.CREATE_TASK: {
      const newTask = { task: action.payload.task, id: action.payload.id, isFinished: false };
      return {
        ...state,
        data: [...state.data, newTask],
        error: null,
      };
    }
    case tasksTypes.UPDATE_TASK:
      return {
        ...state,
        data: state.data.map((task) => (task.id === action.payload.id
          ? action.payload : task)),
        error: null,
      };
    case tasksTypes.DELETE_TASK:
      return {
        ...state,
        data: state.data.filter((task) => task.id !== action.payload),
        error: null,
      };
    case tasksTypes.SET_TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case tasksTypes.FETCH_TASKS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
