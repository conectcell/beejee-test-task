import React, {useState} from 'react';
import {connect} from "react-redux";
import {Redirect, useHistory} from "react-router-dom";
import {
    commonHideLoader,
    commonShowError,
    commonShowLoader,
    commonShowSuccess
} from "../../redux/actions/common-actions";

import Form from "../../components/forms/form";
import compose from "../../utlis/compose";
import {withService} from "../../components/hoc-helpers";
import {authLogin} from "../../redux/actions/auth-actions";
import LoadingHanler from "../../components/loading-handler/loading-handler";

const inputs = [

    {
        name: 'username',
        validator: 'required',
        label: 'Имя пользователя',
    }, {
        name: 'password',
        validator: 'required',
        label: 'Пароль',
        type: 'password'
    },

];

const initialState = {
    username: '',
    password: '',

    validatedFields: {
        username: false,
        password: false,
    },
    errorMessages: {
        username: '',
        password: '',
    },
    validated: false,
};


const LoginPage = ({service, loggedIn, commonShowLoader, commonHideLoader, commonShowSuccess, commonShowError, authLogin}) =>
{

    const [errors, setErrors] = useState({});

    if (loggedIn) return <Redirect to="/"/>

    const createTask = ({username, password}) =>
    {
        let form = new FormData();
        form.append("username", username);
        form.append("password", password);

        commonShowLoader();

        service.login(form).then(({status, message}) =>
        {
            if (status === "ok")
            {
                commonShowSuccess("Вы вошли в систему");
                service.setToken(message.token)
                setTimeout(()=> authLogin(), 1000);
            } else
            {
                commonHideLoader();
                const thisErrors = {...message};

                const formErrors = {};
                for (let {name} of inputs)
                {
                    if (thisErrors[name])
                    {
                        formErrors[name] = thisErrors[name];
                        delete thisErrors[name];
                    }
                }

                setErrors(formErrors);
                if (Object.keys(thisErrors).length > 0) commonShowError(thisErrors);

            }
        });
    }

    return (
        <LoadingHanler>
            <Form action={createTask} inputs={inputs} initialState={initialState} errors={errors} buttonText="Авторизация" header="Вход в систему"/>
        </LoadingHanler>
    );
};

const mapStateToProps = state =>
{
    return {loggedIn: state.auth.loggedIn}
}

export default compose(
    connect(mapStateToProps, {commonShowLoader, commonHideLoader, commonShowSuccess, commonShowError, authLogin}),
    withService()
)(LoginPage);



