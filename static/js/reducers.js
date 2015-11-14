import { SET_NAME } from './actions';
import { combineReducers } from 'redux';

function name(state = 'chen', action) {
    switch (action.type) {
        case SET_NAME:
            return action.name;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    name
});

export default rootReducer;