import {
  LOGIN_USER,
  REGISTER_USER,
  USER_ERROR,
  CLEAR_ERROR,
  GET_PROFILE,
} from "../types";

const defaultState = {
  user: null,
  error: null,
  isAuthenticated: false,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case REGISTER_USER:
    case LOGIN_USER:
    case GET_PROFILE:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        user: null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
