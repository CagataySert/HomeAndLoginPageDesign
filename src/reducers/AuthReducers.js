import { REGISTER_SUCCESS, REGISTER_FAILED, REGISTER_START } from '../actions/types';

const INITIAL_STATE = {
    data: [],
    loading: false
}

export default (state = INITIAL_STATE, { payload, type }) => {
    switch (type) {
        case REGISTER_START:
            return { ...state, loading: true };
        case REGISTER_SUCCESS:
            return { ...state, loading: false };
        case REGISTER_FAILED:
            return { ...state, loading: false };
        default:
            return state;
    }
}