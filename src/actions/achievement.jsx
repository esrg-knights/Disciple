import request from 'superagent-es6-promise';

export const ACHIEVEMENTS_LOADING = 'ACHIEVEMENTS_LOADING';
export const ACHIEVEMENTS_LOADED = 'ACHIEVEMENTS_LOADED';

export function fetchAll() {
  return (dispatch) => {
    dispatch({type: ACHIEVEMENTS_LOADING});

    return request
      .get(`${API_URL}/api/achievements/list/`)
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .then(result => {
        dispatch({
          type: ACHIEVEMENTS_LOADED,
          data: result.body.results
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
}
