import {DINNER_LOADED, DINNER_LOADING} from '../actions/dinner';

export default function dinner(state = {
  isFetching: false,
  dinnerlist: {},
  participations: []
}, action) {
  switch(action.type){
    case DINNER_LOADING:
      return Object.assign({}, state, {
        isFetching: true,
        dinnerlist: {},
        participations: []
      });
    case DINNER_LOADED:
      return Object.assign({}, state, {
        isFetching: false,
        dinnerlist: action.data[0],
        participations: action.data[0].participations
      });
    default:
      return state;
  }
}
