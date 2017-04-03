import {ACHIEVEMENTS_LOADED, ACHIEVEMENTS_LOADING} from '../actions/achievement';

export default function achievement(state = {
  isFetching: false,
  achievements: []
}, action) {
  switch (action.type) {
    case ACHIEVEMENTS_LOADING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case ACHIEVEMENTS_LOADED:
      return Object.assign({}, state, {
        isFetching: false,
        achievements: action.data
      });
    default:
      return state;
  }
}
