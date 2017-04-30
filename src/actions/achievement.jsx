import request from 'superagent-es6-promise'
import { sendMessage } from './snackbar'

export const ACHIEVEMENTS_LOADED = 'ACHIEVEMENTS_LOADED'
export const GETS_LOADING = 'GETS_LOADING'
export const GETS_LOADED = 'GETS_LOADED'

export function getAchievements () {
  return (dispatch) => {
    dispatch({type: 'ACHIEVEMENTS_LOADING'})

    return request.get(API_URL + '/api/models/achievement/')
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .then(result => dispatch({type: ACHIEVEMENTS_LOADED, data: result.body}))
      .catch(error => dispatch(sendMessage('Failed to fetch achievements', 2000, 'Retry', () => dispatch(getAchievements()))))
  }
}

export function getAchievementGets (achievementId) {
  return (dispatch) => {
    dispatch({type: GETS_LOADING}, achievementId)

    return request.get(API_URL + `/api/models/achievement_get/?achievement=${achievementId}`)
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .then(result => dispatch({type: GETS_LOADED, data: result.body}))
      .catch(error => sendMessage('Failed to get achievement gets'))
  }
}
