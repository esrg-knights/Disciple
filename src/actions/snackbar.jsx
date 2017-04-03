export const MESSAGE_DISPATCHED = 'MESSAGE_DISPATCHED';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export function sendMessage(text, timeout = 2000, actionName = '', action = () => {
}) {
    return (dispatch) => {
        dispatch({type: MESSAGE_DISPATCHED, text, timeout, actionName, action});
    }
}

export function closeSnackbar() {
    return (dispatch) => {
        dispatch({type: CLOSE_SNACKBAR})
    }
}