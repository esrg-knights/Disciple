import {MESSAGE_DISPATCHED, CLOSE_SNACKBAR} from '../actions/snackbar';

export default function snackbar(state = {
    history: [],
    last: {
        text: "",
        timeout: 0
    },
    open: false,
    lastChange: 0
}, action) {
    switch (action.type) {
        case MESSAGE_DISPATCHED:
            let newMessage = {
                text: action.text,
                timeout: action.timeout,
                func: action.func
            };
            return Object.assign({}, state, {
                history: state.history.concat([newMessage]),
                last: newMessage,
                open: true,
                lastChange: new Date().getMilliseconds()
            });
        case CLOSE_SNACKBAR:
            return Object.assign({}, state, {
                open: false
            });
        default:
            return state;
    }
}