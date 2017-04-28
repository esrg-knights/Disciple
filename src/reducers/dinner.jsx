import { DINNER_LOADED, DINNER_LOADING, PARTICIPATIONS_LOADED, PARTICPATION_SWITCHED } from '../actions/dinner'

export default function dinner (state = {
  isFetching: false,
  lists: [],
  latestList: {},
  participations: []
}, action) {
  switch (action.type) {
    case DINNER_LOADING:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case DINNER_LOADED:
      return Object.assign({}, state, {
        isFetching: false,
        lists: action.data,
        latestList: action.data[0]
      })
    case PARTICIPATIONS_LOADED:
      return Object.assign({}, state, {
        participations: action.data
      })
    case PARTICPATION_SWITCHED:
      return Object.assign({}, state, {
        participations: state.participations.map(participation => participation.id === action.data.id ? action.data : participation)
      })
    default:
      return state
  }
}
