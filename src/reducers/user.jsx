import {USERS_LOADED} from '../actions/user'

export default function users(state = {
  users: []
}, action){
  switch (action.type){
    case USERS_LOADED:
      return Object.assign({}, state, {
        users: action.data
      })
    default:
      return state
  }
}
