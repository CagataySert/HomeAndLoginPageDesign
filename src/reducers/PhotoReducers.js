import { UPLOAD_START, UPLOAD_SUCCESS, UPLOAD_FAILED, GET_PHOTOS_START, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from '../actions/types';

const INITIAL_STATE = {
    data: [],
    loading: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case UPLOAD_START, GET_PHOTOS_START:
            return { ...state, loading: true }
        case UPLOAD_SUCCESS:
            return { ...state, data: [...state.data, payload], loading: false }
        case UPLOAD_FAILED:
            return { ...state, data: payload, loading: false }
        case GET_PHOTOS_SUCCESS:
            return { ...state, data: payload, loading: false }
        case GET_PHOTOS_FAILED:
            return { ...state, data: payload, loading: false }
        default:
            return state;
    }
}