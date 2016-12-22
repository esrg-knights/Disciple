import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import auth from "./auth";
import dinner from "./dinner";

export default combineReducers({
  auth,
  dinner,
  form
})
