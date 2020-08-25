import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import Profile from "./Profile";

export default combineReducers({
  alert,
  auth,
  Profile,
});
