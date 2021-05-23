import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import Form from "../../components/forms/form";
import compose from "../../utlis/compose";
import {withService} from "../../components/hoc-helpers";

import {sagaLogin} from "../../redux/actions/saga-actions";

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


const LoginPage = ({loggedIn, sagaLogin, errors}) =>
{
    if (loggedIn) return <Redirect to="/"/>

    const loginAction = ({username, password}) =>
    {
        let form = new FormData();
        form.append("username", username);
        form.append("password", password);

        sagaLogin(form);
    }

    return (
        <Form action={loginAction} inputs={inputs} initialState={initialState} errors={errors} buttonText="Авторизация" header="Вход в систему"/>
    );
};

const mapStateToProps = state => ({loggedIn: state.auth.loggedIn, errors: state.formErrors.loginFormErrors})

export default compose(
    connect(mapStateToProps, {sagaLogin}),
    withService()
)(LoginPage);



