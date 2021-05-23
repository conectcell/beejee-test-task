import {takeEvery} from 'redux-saga/effects';
import {SAGA_SHOW_ERROR, SAGA_SHOW_SUCCESS} from '../../action-types-saga';

const thisSaga = (saga) => [
    takeEvery(SAGA_SHOW_ERROR, [saga, saga.errorMessageSaga]),
    takeEvery(SAGA_SHOW_SUCCESS, [saga, saga.successMessageSaga]),
]

export default thisSaga;
