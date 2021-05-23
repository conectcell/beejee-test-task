import {takeEvery} from 'redux-saga/effects';
import {SAGA_LOGIN, SAGA_LOGOUT} from '../../action-types-saga';


const thisSaga = (saga) => [
    takeEvery(SAGA_LOGIN, [saga, saga.loginSaga]),
    takeEvery(SAGA_LOGOUT, [saga, saga.logoutSaga]),
]


export default thisSaga;
