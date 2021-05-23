import {all} from 'redux-saga/effects';
import es6promise from 'es6-promise';


import BeejeeService from "../services/beejee-service";

import HelperSaga from './sagas/actors/helper-saga';
import AuthSaga from './sagas/actors/auth-saga';
import TasksSaga from './sagas/actors/tasks-saga';

import HelperListener from './sagas/listeners/saga-helper-listener';
import AuthListener from './sagas/listeners/saga-auth-listener';
import TasksListener from './sagas/listeners/saga-tasks-listener';

es6promise.polyfill();

const service = new BeejeeService();



const helperSagas = HelperListener(new HelperSaga(service));
const authSagas = AuthListener(new AuthSaga(service));
const tasksSagas = TasksListener(new TasksSaga(service));
//


function* rootSaga() {
    try {
        yield all([...authSagas, ...helperSagas, ...tasksSagas]);
    } catch (e) {
        console.log(e);
    }
}


export default rootSaga;
