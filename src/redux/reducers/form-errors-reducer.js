import {SET_ADD_TASK_FORM_ERRORS, SET_EDIT_TASK_FORM_ERRORS, SET_LOGIN_FORM_ERRORS} from '../action-types';

const initialState = {
    loginFormErrors: {},
    addTaskFormErrors: {},
    editTaskFormErrors: {},
};

const formErrorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADD_TASK_FORM_ERRORS:
            return {
                ...state,
                addTaskFormErrors: action.data,
            };
        case SET_LOGIN_FORM_ERRORS:
            return {
                ...state,
                loginFormErrors: action.data,
            };
        case SET_EDIT_TASK_FORM_ERRORS:
            return {
                ...state,
                editTaskFormErrors: action.data,
            };
        default:
            return state;
    }


};

export default formErrorsReducer;
