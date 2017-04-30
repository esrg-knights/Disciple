import { ACHIEVEMENTS_LOADED, GETS_LOADED, GETS_LOADING } from '../actions/achievement'

export default function achievement (state = {
  achievements: [],
  achievementGets: []
}, action) {
  switch (action.type) {
    case ACHIEVEMENTS_LOADED:
      return Object.assign({}, state, {
        achievements: action.data
      })
    case GETS_LOADING:
      return Object.assign({}, state, {
        achievementGets: []
      })
    case GETS_LOADED:
      return Object.assign({}, state, {
        achievementGets: action.data
      })
    default:
      return state
  }
}
