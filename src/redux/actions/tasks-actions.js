import {SET_TAKS_SEARCH_PARAMS, SET_TASKS_COUNT, SET_TASKS_LIST, UPDATE_TASKS} from '../action-types';


export const updateTasks = (data) => ({type: UPDATE_TASKS, data});
export const setTaksSearchParams = (data) => ({type: SET_TAKS_SEARCH_PARAMS, data});
export const setTasksList = (data) => ({type: SET_TASKS_LIST, data});
export const setTasksCount = (data) => ({type: SET_TASKS_COUNT, data});
