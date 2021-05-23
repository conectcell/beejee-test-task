import {combineReducers} from 'redux';
import commonReducer from "./common-reducer";
import authReducer from "./auth-reducer";
import formErrorsReducer from "./form-errors-reducer";
import tasksReducer from "./tasks-reducer";


export default combineReducers({
    common: commonReducer,
    auth: authReducer,
    formErrors: formErrorsReducer,
    tasks: tasksReducer
});
