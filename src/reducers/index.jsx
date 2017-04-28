import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth'
import dinner from './dinner'
import snackbar from './snackbar'
import user from './user'
import { LOGOUT } from '../actions/auth'

export const appReducer = combineReducers({
  auth,
  dinner,
  snackbar,
  user,
  form
})


export default (state, action) => {
  if (action.type === LOGOUT) {
    /* eslint-disable no-param-reassign */
    state = undefined;
    /* eslint-enable no-param-reassign */
  }
  return appReducer(state, action);
};
