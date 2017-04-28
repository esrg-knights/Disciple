import request from 'superagent-es6-promise'
import { sendMessage } from './snackbar'

export const DINNER_LOADING = 'DINNER_LOADING'
export const DINNER_LOADED = 'DINNER_LOADED'
export const PARTICIPATION_TOGGLED = 'PARTICIPATION_TOGGLED'
export const PARTICIPATIONS_LOADED = 'PARTICIPATIONS_LOADED'
export const PARTICPATION_SWITCHED = 'PARTICPATION_SWITCHED'
export const LIST_JOINED = 'LIST_JOINED'

export function getDiningLists () {
  return (dispatch) => {
    dispatch({type: DINNER_LOADING})

    return request.get(API_URL + '/api/models/dining/')
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .then(result => dispatch({type: DINNER_LOADED, data: result.body}))
  }
}

export function getDiningParticipations (diningList) {
  return (dispatch) => {
    dispatch({type: 'PARTICIPANTS_LOADING', data: diningList})

    return request.get(`${API_URL}/api/models/dining_participation/?dining_list=${diningList}`)
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .then(result => dispatch({type: PARTICIPATIONS_LOADED, data: result.body}))
  }
}

function putParticipation (data) {
  return (dispatch) => {
    dispatch({type: 'PARTICPATION_SWITCHING', data})

    return request.put(`${API_URL}/api/models/dining_participation/${data.id}/`)
      .set('Authorization', `JWT ${localStorage.getItem('token')}`)
      .send(data).then(result => dispatch({type: 'PARTICPATION_SWITCHED', data: result.body}))
      .catch(error => {
        if (error.status === 401) dispatch(sendMessage('You are not the owner of the list!'))
        else dispatch(sendMessage('Something went wrong!'))
      })
  }
}

export function setPaid (id, user, status) {
  return (dispatch) => dispatch(putParticipation({
    id,
    user,
    paid: status
  }))
}

export function setCook (id, user, status) {
  return (dispatch) => dispatch(putParticipation({
    id,
    user,
    work_cook: status
  }))
}

export function setDishes (id, user, status) {
  return (dispatch) => dispatch(putParticipation({
    id,
    user,
    work_dishes: status
  }))
}

export function setGroceries (id, user, status) {
  return (dispatch) => dispatch(putParticipation({
    id,
    user,
    work_groceries: status
  }))
}

export function joinList (list) {
  return (dispatch, getState) => {
    let uid = localStorage.getItem('uid')
    if (getState().dinner.participations.find(participation => participation.user === Number(uid)) === undefined) {
      dispatch({type: 'LIST_JOINING', data: {list, user: uid}})

      return request.post(`${API_URL}/api/models/dining_participation/`)
        .set('Authorization', `JWT ${localStorage.getItem('token')}`)
        .send({
          dining_list: list,
          user: uid
        })
        .then(result => dispatch({type: 'LIST_JOINED', data: result.body}))
        .catch(error => sendMessage('Failed to join the list'))
    } else {
      dispatch({type: 'LIST_ALREADY_JOINED'})
      dispatch(sendMessage('You\'re already on this list!'))
      Promise.resolve()
    }
  }
}

export function claimList (list) {
  return (dispatch, getState) => {
    let uid = localStorage.getItem('uid')

    if (getState().dinner.latestList.owner === null) {
      dispatch({type: 'LIST_CLAIMING', data: {id: list, owner: uid}})

      return request.patch(`${API_URL}/api/models/dining/${list}/`)
        .set('Authorization', `JWT ${localStorage.getItem('token')}`)
        .send({
          id: list,
          owner: uid
        })
        .then(result => dispatch({type: 'LIST_JOINED', data: result.body}))
        .catch(error => sendMessage('Failed to join the list'))
    } else {
      dispatch(sendMessage('This list has already been claimed!'))
      Promise.resolve()
    }
  }
}
