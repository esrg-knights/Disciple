import {LOGIN_PENDING, LOGIN_SUCCESFULL, LOGIN_FAILED, LOGIN_REFRESHED, LOGOUT} from '../actions/auth';

export default function authLogin(state = {
  isFetching: false,
  isLoggedIn: false,
  isFailed: false,
  username: "",
  jwt: "",
  lastChange: 0
}, action) {
  console.log(action);
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isFetching: true,
        username: action.username
      });
    case LOGIN_SUCCESFULL:
      localStorage.setItem('token', action.data.token);
      return Object.assign({}, state, {
        isFetching: false,
        isFailed: false,
        isLoggedIn: true,
        jwt: action.data.token,
        lastChange: new Date().getTime()
      });
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        isFailed: true,
        username: '',
        jwt: ''
      });
    case LOGIN_REFRESHED:
      return Object.assign({}, state, {
        jwt: action.data.token,
        lastChange: new Date().getTime()
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        isFailed: false,
        username: '',
        jwt: ''
      });
    default:
      return state;
  }
}
