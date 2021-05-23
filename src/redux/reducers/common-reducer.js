import {
    HIDE_ERROR,
    HIDE_FORM_LOADER,
    HIDE_LOADER,
    HIDE_SUCCESS,
    REDIRECT,
    SHOW_ERROR,
    SHOW_FORM_LOADER,
    SHOW_LOADER,
    SHOW_SUCCESS
} from '../action-types';

const initialState = {
    globalError: null,
    globalSuccess: null,
    loading: false,
    formLoading: false,
    redirect: null,
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
        case SHOW_FORM_LOADER:
            return {
                ...state,
                formLoading: true,
            };
        case HIDE_FORM_LOADER:
            return {
                ...state,
                formLoading: false,
            };
        case REDIRECT:
            return {
                ...state,
                redirect: action.data,
            };
        default:
            return state;
    }


};

export default commonReducer;
