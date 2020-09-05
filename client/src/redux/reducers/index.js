import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";

//combine multiple reducers
export default combineReducers({
  //reducers!!
  auth: authReducer,
  blogs: blogReducer,
});
