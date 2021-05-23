import {SET_ADD_TASK_FORM_ERRORS, SET_EDIT_TASK_FORM_ERRORS, SET_LOGIN_FORM_ERRORS} from '../action-types';

export const setLoginFormErrors = (data) => ({type: SET_LOGIN_FORM_ERRORS, data});
export const setAddTaskFormErrors = (data) => ({type: SET_ADD_TASK_FORM_ERRORS, data});
export const setEditTaskFormErrors = (data) => ({type: SET_EDIT_TASK_FORM_ERRORS, data});
