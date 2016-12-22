import request from 'superagent-es6-promise';
export const LOGIN_SUCCESFULL = 'LOGIN_SUCCESFULL';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export function login(credentials){
   return (dispatch) => {
    dispatch({type: LOGIN_PENDING, username: credentials.username});

    return request
      .post('http://localhost:8000/api/auth/token/')
      .set('Content-Type', 'application/json')
      .send(credentials)
      .then(result => {
        dispatch({
          type: LOGIN_SUCCESFULL,
          data: result.body
        })
      })
      .catch(error =>{
        dispatch({
          type: LOGIN_FAILED,
          error
        })
      })
  }
}

export function logout(){
  return (dispatch) => {
    dispatch({
      type: LOGOUT
    });
  }
}
