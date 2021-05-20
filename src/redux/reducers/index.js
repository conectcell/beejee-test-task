import {combineReducers} from 'redux';
import commonReducer from "./common-reducer";
import authReducer from "./auth-reducer";


export default combineReducers({
    common: commonReducer,
    auth: authReducer
});
