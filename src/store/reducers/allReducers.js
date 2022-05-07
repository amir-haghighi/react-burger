import { combineReducers } from "redux";
import burgerReducer from "./burgerReducer";
import userReducer from "./userReducer";
import signinReducer from "./signinReducer";
const allReducers = combineReducers({
  order: burgerReducer,
  user: userReducer,
  isSigned: signinReducer,
});
export default allReducers;
