import {LOGIN_PENDING, LOGIN_SUCCESFULL, LOGIN_FAILED, LOGOUT} from '../actions/auth';

export default function authLogin(state = {
  isFetching: false,
  isLoggedIn: false,
  username: "",
  jwt: ""
}, action){
  console.log(action);
  switch(action.type){
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isFetching: true,
        username: action.username
      });
    case LOGIN_SUCCESFULL:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: true,
        jwt: action.data.token
      });
    case LOGIN_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        username: '',
        jwt: ''
      });
    case LOGOUT:
      return Object.assign({}, state, {
        isFetching: false,
        isLoggedIn: false,
        username: '',
        jwt: ''
      });
    default:
      return state;
  }
}
