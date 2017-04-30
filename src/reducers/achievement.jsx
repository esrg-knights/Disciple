import { ACHIEVEMENTS_LOADED } from '../actions/achievement'

export default function achievement (state = {
  achievements: [],
  achievementGets: []
}, action) {
  switch (action.type) {
    case ACHIEVEMENTS_LOADED:
      return Object.assign({}, state, {
        achievements: action.data
      })
    default:
      return state
  }
}
