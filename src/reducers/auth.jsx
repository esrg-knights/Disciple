import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_REFRESHED, LOGIN_SUCCESFULL, LOGOUT } from '../actions/auth'

export default function authLogin (state = {
  isFetching: false,
  isLoggedIn: false,
  username: '',
  jwt: '',
  user: {}
}, action) {
  console.log(action)
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, state, {
        isFetching: true,
        username: action.username
      })
    case LOGIN_SUCCESFULL:
      localStorage.setItem('token', action.data.token)
      localStorage.setItem('uid', action.data.user.id)
      return Object.assign({}, state, {
        isFetching: false,
        isFailed: false,
        isLoggedIn: true,
        user: action.data.user,
        jwt: action.data.token,
        lastChange: new Date().getTime()
      })
    default:
      return state
  }
}
