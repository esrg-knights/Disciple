import {DINNER_LOADED, DINNER_LOADING, PARTICIPATION_TOGGLED} from '../actions/dinner';

export default function dinner(state = {
  isFetching: false,
  dinnerlist: {},
  participations: []
}, action) {
  switch (action.type) {
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
    case PARTICIPATION_TOGGLED:
      let index = state.participations.findIndex((it) => it.id == action.id);

      let oldParticipation = state.participations[index];
      oldParticipation.work_groceries = action.data.work_groceries;
      oldParticipation.work_cook = action.data.work_cook;
      oldParticipation.work_dished = action.data.work_dishes;
      oldParticipation.paid = action.data.paid;

      let newList = state.participations;

      newList[index] = oldParticipation;

      return Object.assign({}, state, {
        participations: newList
      });
    default:
      return state;
  }
}
