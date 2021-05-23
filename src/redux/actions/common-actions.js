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

export const commonShowLoader = () => ({type: SHOW_LOADER});
export const commonHideLoader = () => ({type: HIDE_LOADER});

export const commonShowFormLoader = () => ({type: SHOW_FORM_LOADER});
export const commonHideFormLoader = () => ({type: HIDE_FORM_LOADER});

export const commonShowError = (data) => ({type: SHOW_ERROR, data});
export const commonHideError = () => ({type: HIDE_ERROR});

export const commonShowSuccess = (data) => ({type: SHOW_SUCCESS, data});
export const commonHideSuccess = () => ({type: HIDE_SUCCESS});
export const commonRedirect = (data) => ({type: REDIRECT, data});
