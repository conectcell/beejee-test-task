import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers";
import rootSaga from './saga';


const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));
store.sagaTask = sagaMiddleware.run(rootSaga);
export default store;


