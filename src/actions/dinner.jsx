import request from 'superagent-es6-promise';

export const DINNER_LOADING = 'DINNER_LOADING';
export const DINNER_LOADED = 'DINNER_LOADED';
export const PARTICIPATION_TOGGLED = 'PARTICIPATION_TOGGLED';

export function query() {
  return (dispatch) => {
    dispatch({type: DINNER_LOADING});

    return request
      .get(`${API_URL}/api/dinner/`)
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .then(result => {
        dispatch({
          type: DINNER_LOADED,
          data: result.body.results
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export function updateParticipation(participation_id, groceries, cook, dishes, paid) {
  let data = {
    "work_groceries": groceries,
    "work_cook": cook,
    "work_dishes": dishes,
    "paid": paid
  }
  return (dispatch) => {
    request.patch(`${API_URL}/api/participation/${participation_id}/`)
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .send(data)
      .then(result => {
        dispatch({
          type: PARTICIPATION_TOGGLED,
          id: participation_id,
          data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
}
