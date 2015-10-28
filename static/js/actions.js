export const SET_NAME = 'SET_NAME';
export const SET_TIME = 'SET_TIME';

export function setName(name) {
    return {
        type: SET_NAME,
        name
    };
}

function time() {
    return {
        type: SET_TIME
    };
}

export function setTime() {
    return (dispatch, getState) => {
        setInterval(() => {
            dispatch(time());
        }, 1000);
    };
}