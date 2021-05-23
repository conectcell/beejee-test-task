import {takeEvery} from 'redux-saga/effects';
import {SAGA_ADD_TASK, SAGA_EDIT_TASK, SAGA_GET_TASKS} from '../../action-types-saga';

const thisSaga = (saga) => [
    takeEvery(SAGA_ADD_TASK, [saga, saga.addTaskSaga]),
    takeEvery(SAGA_EDIT_TASK, [saga, saga.editTaskSaga]),
    takeEvery(SAGA_GET_TASKS, [saga, saga.tasksListSaga]),
]

export default thisSaga;
