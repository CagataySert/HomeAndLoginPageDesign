import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    REGISTER_START,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    loading: false
}

export default (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case LOGIN_START:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, data: payload };
        case LOGIN_FAILED:
            return { ...state, loading: false, data: payload };
        case REGISTER_START:
            return { ...state, loading: true };
        case REGISTER_SUCCESS:
            return { ...state, loading: false };
        case REGISTER_FAILED:
            return { ...state, loading: false, data: payload };
        default:
            return state;
    }
}