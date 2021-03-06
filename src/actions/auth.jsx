import request from 'superagent-es6-promise';
export const LOGIN_SUCCESFULL = 'LOGIN_SUCCESFULL';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_REFRESHED = 'LOGIN_REFRESHED';
export const LOGOUT = 'LOGOUT';

export function login(credentials){
   return (dispatch) => {
    dispatch({type: LOGIN_PENDING, username: credentials.username});

    return request
      .post(API_URL + `/api/auth/token/`)
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

export const refresh = () => {
  if (localStorage.getItem(`token`) == null) {
    return logout()
  } else {
    return (dispatch) => {
      return request
        .post(API_URL + `/api/auth/refresh/`)
        .send({token: localStorage.getItem('token')})
        .then(result => {
          dispatch({
            type: LOGIN_REFRESHED,
            data: result.body
          })
        })
        .catch(() => {
          dispatch(logout());
        })
    }
  }
};

export function logout(){
  return (dispatch) => {
    dispatch({
      type: LOGOUT
    });
  }
}
