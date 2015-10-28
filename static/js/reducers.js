import { SET_NAME, SET_TIME } from './actions';
import { combineReducers } from 'redux';

function name(state = 'chen', action) {
    switch (action.type) {
        case SET_NAME:
            return action.name;
        default:
            return state;
    }
}

function time(state = +new Date(), action) {
    switch (action.type) {
        case SET_TIME:
            return +new Date();
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    name,
    time
});

export default rootReducer;