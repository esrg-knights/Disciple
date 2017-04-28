import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_REFRESHED, LOGIN_SUCCESFULL, LOGOUT } from '../actions/auth'

export default function authLogin (state = {
  isFetching: false,
  isLoggedIn: false,
  jwt: '',
}, action) {
  console.log(action)
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isFetching: true
      })
    case LOGIN_SUCCESFULL:
      localStorage.setItem('token', action.data.token)
      return Object.assign({}, state, {
        isFetching: false,
        isFailed: false,
        isLoggedIn: true,
        jwt: action.data.token,
        lastChange: new Date().getTime()
      })
    default:
      return state
  }
}
