import {
  LOGIN,
  LOGOUT
} from '../action-types';

export const authLogin = () => ({type: LOGIN});
export const authLogout = () => ({type: LOGOUT});
