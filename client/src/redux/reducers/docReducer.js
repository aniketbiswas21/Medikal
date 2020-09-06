import { GET_ALL_DOCS, DOCS_ERROR, GET_DOC, GET_SLOTS } from "../types";

const defaultState = {
  doctors: null,
  doctor: null,
  error: null,
  slots: null,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALL_DOCS:
      return {
        ...state,
        doctors: action.payload,
        error: null,
        doctor: null,
      };
    case DOCS_ERROR:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
        user: null,
      };
    case GET_DOC:
      return {
        ...state,
        doctor: action.payload,
        error: null,
      };
    case GET_SLOTS:
      return {
        ...state,
        slots: action.payload,
      };
    default:
      return state;
  }
};
