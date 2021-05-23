import {call, delay, put} from 'redux-saga/effects';

import {
    commonHideFormLoader,
    commonHideLoader,
    commonShowError,
    commonShowFormLoader,
    commonShowLoader,
    commonShowSuccess
} from '../../actions/common-actions';
import {authLogin, authLogout} from '../../actions/auth-actions';
import {loginFormErrors} from "../../../utlis/form-errors";
import {setLoginFormErrors} from "../../actions/form-errors-actions";

class AuthSaga
{
    constructor(service)
    {
        this.service = service;
    }

    * loginSaga({params})
    {
        yield put(commonShowFormLoader());
        const {status, message} = yield call(this.service.login, params);
        yield put(setLoginFormErrors({}));
        if (status === "ok")
        {
            yield put(commonShowSuccess("Вы вошли в систему"));
            yield call(this.service.setToken, message.token);
            yield delay(1000)
            yield put(authLogin());
        } else
        {
            const {formErrors, leftErrors} = yield call(loginFormErrors, message);
            yield put(setLoginFormErrors(formErrors));
            yield put(commonShowError(leftErrors));
        }

        yield put(commonHideFormLoader());

    }

    * logoutSaga()
    {
        yield put(commonShowLoader());
        yield put(commonShowSuccess("Вы вышли из системы"));
        yield call(this.service.clearToken);
        yield delay(1000);
        yield put(commonHideLoader());
        yield put(authLogout());

    }


}

export default AuthSaga;
