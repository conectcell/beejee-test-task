import {
    SHOW_ERROR,
    SHOW_LOADER,
    HIDE_LOADER,
    HIDE_ERROR,
    SHOW_SUCCESS,
    HIDE_SUCCESS,
} from '../action-types';

const initialState = {
    globalError: null,
    globalSuccess: null,
    loading: false,
};

const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                ...state,
                globalError: action.data,
            };
        case HIDE_ERROR:
            return {
                ...state,
                globalError: null,
            };
        case SHOW_SUCCESS:
            return {
                ...state,
                globalSuccess: action.data,
            };
        case HIDE_SUCCESS:
            return {
                ...state,
                globalSuccess: null,
            };
        case SHOW_LOADER:
            return {
                ...state,
                loading: true,
            };
        case HIDE_LOADER:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }


};

export default commonReducer;
