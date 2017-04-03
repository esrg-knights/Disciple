import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import auth from "./auth";
import dinner from "./dinner";
import snackbar from './snackbar';
import achievement from './achievement';

export default combineReducers({
  auth,
  dinner,
  snackbar,
  achievement,
  form
})
