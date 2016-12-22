import request from 'superagent-es6-promise';

export const DINNER_LOADING = 'DINNER_LOADING';
export const DINNER_LOADED = 'DINNER_LOADED';

export function query() {
  return (dispatch) => {
    dispatch({type: DINNER_LOADING});

    return request
      .get('http://localhost:8000/api/dinner/')
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
