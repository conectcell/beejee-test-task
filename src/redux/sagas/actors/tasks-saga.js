import {call, delay, put} from 'redux-saga/effects';

import {
    commonHideFormLoader,
    commonHideLoader,
    commonRedirect,
    commonShowError,
    commonShowFormLoader,
    commonShowLoader,
    commonShowSuccess
} from '../../actions/common-actions';
import {addTasksFromErrors, editTasksFromErrors} from "../../../utlis/form-errors";
import {setAddTaskFormErrors, setEditTaskFormErrors} from "../../actions/form-errors-actions";
import {setTaksSearchParams, setTasksCount, setTasksList, updateTasks} from "../../actions/tasks-actions";
import {authLogout} from "../../actions/auth-actions";

class TasksSaga
{
    constructor(service)
    {
        this.service = service;
    }

    * addTaskSaga({params})
    {

        // show loader - clean previous errors
        yield put(commonShowFormLoader());
        yield put(setAddTaskFormErrors({}));

        // make request
        const {status, message} = yield call(this.service.addTask, params);

        // show success alert - redirect to main page
        if (status === "ok")
        {
            yield put(commonShowSuccess("Задача сохранена"));
            yield delay(1000)
            yield put(commonRedirect("/"))
        }
        // show errors
        else
        {
            const {formErrors, leftErrors} = yield call(addTasksFromErrors, message);
            yield put(setAddTaskFormErrors(formErrors));
            yield put(commonShowError(leftErrors));
        }

        yield put(commonHideFormLoader());
    }


    * editTaskSaga({id, params})
    {

        // show loader - clean previous errors
        yield put(commonShowFormLoader());
        yield put(setEditTaskFormErrors({}));

        // make request
        const {status, message} = yield call(this.service.editTask, id, params);

        if (status === "ok")
        {
            // show success alert
            yield put(commonShowSuccess("Задача сохранена"));
            //small delay
            yield delay(1000);
            // update this page
            yield put(updateTasks(true));

        }
        // user is not authorized - redirect to login page
        else if (message.token && (message.token === "Токен истёк" || message.token === "Невалидный токен"))
        {

            yield put(authLogout());
            yield call(this.service.clearToken);
            yield put(commonShowError("Пройдите авторизацию"));
            yield put(commonRedirect("/login"))
        }
        // other errors if exist
        else
        {
            const {formErrors, leftErrors} = yield call(editTasksFromErrors, message);
            yield put(setEditTaskFormErrors(formErrors));
            yield put(commonShowError(leftErrors));
        }
        // hide form loader
        yield put(commonHideFormLoader());
    }


    * tasksListSaga({params})
    {

        // show loader - clean previous errors
        yield put(commonShowLoader());

        // save search params
        yield put(setTaksSearchParams(params));
        // make request
        const {status, message} = yield call(this.service.getTasksList, params);

        // show success alert - redirect to main page
        if (status === "ok")
        {

            const {tasks, total_task_count: total} = message;
            // save data
            yield put(setTasksList(tasks));
            yield put(setTasksCount(parseInt(total)));
        }
        // show errors
        else
        {
            yield put(commonShowError(message));
        }

        yield put(commonHideLoader());
    }

}

export default TasksSaga;
