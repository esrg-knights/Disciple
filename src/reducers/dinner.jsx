import {DINNER_LOADED, DINNER_LOADING} from '../actions/dinner';

export default function dinner(state = {
  isFetching: false,
  dinnerlist: []
}, action) {
  switch(action.type){
    case DINNER_LOADING:
      return Object.assign({}, state, {
        isFetching: true,
        dinnerlist: []
      });
    case DINNER_LOADED:
      return Object.assign({}, state, {
        isFetching: false,
        dinnerlist: action.data
      });
    default:
      return state;
  }
}
