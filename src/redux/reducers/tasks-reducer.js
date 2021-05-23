import {SET_TAKS_SEARCH_PARAMS, SET_TASKS_COUNT, SET_TASKS_LIST, UPDATE_TASKS} from '../action-types';

const initialState = {
    updateTasks: false,
    tasksSearchParams: {
        page: 1,
    },
    tasksList: [],
    totalTasks: 0,
};

const tasksReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case UPDATE_TASKS:
            return {
                ...state,
                updateTasks: action.data,
            };
        case SET_TASKS_LIST:
            return {
                ...state,
                tasksList: action.data,
            };
        case SET_TASKS_COUNT:
            return {
                ...state,
                totalTasks: action.data,
            };
        case SET_TAKS_SEARCH_PARAMS:
            return {
                ...state,
                tasksSearchParams: action.data,
            };
        default:
            return state;
    }


};

export default tasksReducer;
