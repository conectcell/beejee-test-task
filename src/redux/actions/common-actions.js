import {
  HIDE_LOADER,
  HIDE_ERROR,
  SHOW_ERROR,
  SHOW_LOADER,
  SHOW_SUCCESS,
  HIDE_SUCCESS,
} from '../action-types';

export const commonShowLoader = () => ({type: SHOW_LOADER});
export const commonHideLoader = () => ({type: HIDE_LOADER});
export const commonShowError = (data) => ({type: SHOW_ERROR, data});
export const commonHideError = () => ({type: HIDE_ERROR});

export const commonShowSuccess = (data) => ({type: SHOW_SUCCESS, data});
export const commonHideSuccess = () => ({type: HIDE_SUCCESS});
