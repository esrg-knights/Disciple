import request from 'superagent-es6-promise'

export const USERS_LOADED = 'USERS_LOADED'

export function getAllUsers(){
  return (dispatch) => {
    dispatch({type: 'USERS_FETCHING'})

    return request.get(API_URL + '/api/models/user/')
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .then(result => dispatch({type: USERS_LOADED, data: result.body}))
  }
}
