import {SAGA_ADD_TASK, SAGA_EDIT_TASK, SAGA_GET_TASKS, SAGA_LOGIN, SAGA_LOGOUT} from '../action-types-saga';

export const sagaAddTask = (params) => ({
  type: SAGA_ADD_TASK,
  params
});


export const sagaEditTask = (id, params) => ({
  type: SAGA_EDIT_TASK,
  id,
  params
});


export const sagaGetTasksList = (params) => ({
  type: SAGA_GET_TASKS,
  params
});


export const sagaLogin = (params) => ({
  type: SAGA_LOGIN,
  params
});




export const sagaLogout = () => ({
  type: SAGA_LOGOUT
});

//endregion
