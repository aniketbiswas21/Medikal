import { GET_BLOG, BLOGS_ERROR, CLEAR_BLOG, ADD_BLOG } from "../types";

const defaultState = {
  blog: null,
  error: null,
  uploadSucess: null,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case BLOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_BLOG:
      return {
        ...state,
        blog: null,
        error: null,
      };
    case ADD_BLOG:
      return {
        ...state,
        uploadSucess: true,
      };
    default:
      return state;
  }
};
