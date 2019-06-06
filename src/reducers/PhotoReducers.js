import { UPLOAD_START, UPLOAD_SUCCESS, UPLOAD_FAILED } from '../actions/types';

const INITIAL_STATE = {
    data: null,
    loading: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case UPLOAD_START:
            return { ...state, data: payload, loading: true }
        case UPLOAD_SUCCESS:
            return { ...state, data: payload, loading: false }
        case UPLOAD_FAILED:
            return { ...state, data: payload, loading: false }

        default:
            return state;
    }
}