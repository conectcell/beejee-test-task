import React from 'react';
import {connect} from "react-redux";

import Form from "../../components/forms/form";
import compose from "../../utlis/compose";
import {withService} from "../../components/hoc-helpers";
import {sagaAddTask} from "../../redux/actions/saga-actions";

const inputs = [
    {
        name: 'email',
        validator: 'email',
        label: 'Почта',
        type: 'email'
    },
    {
        name: 'username',
        validator: 'required',
        label: 'Пользователь',
    }, {
        name: 'text',
        validator: 'required',
        label: 'Текст задачи',
    },

];

const initialState = {
    email: '',
    username: '',
    text: '',
    validatedFields: {
        email: false,
        username: false,
        text: false,
    },
    errorMessages: {
        email: '',
        username: '',
        text: '',
    },
    validated: false,
};


const AddTaskPage = ({errors, sagaAddTask}) =>
{


    const createTask = ({username, email, text}) =>
    {
        let form = new FormData();
        form.append("username", username);
        form.append("email", email);
        form.append("text", text);
        sagaAddTask(form);

        //TODO redirect on main page when task added
    }

    return (
        <Form action={createTask} inputs={inputs} initialState={initialState} errors={errors} buttonText="Добавить" header="Добавление задачи"/>
    );
};

const mapStateToProps = state => ({errors: state.formErrors.addTaskFormErrors})


export default compose(
    connect(mapStateToProps, {sagaAddTask}),
    withService()
)(AddTaskPage);



