import React, {useState} from 'react';
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {
    commonHideLoader,
    commonShowError,
    commonShowLoader,
    commonShowSuccess
} from "../../redux/actions/common-actions";

import Form from "../../components/forms/form";
import compose from "../../utlis/compose";
import {withService} from "../../components/hoc-helpers";
import LoadingHanler from "../../components/loading-handler/loading-handler";

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


const AddTaskPage = ({service, commonShowLoader, commonHideLoader, commonShowSuccess, commonShowError}) =>
{
    const history = useHistory();

    const [errors, setErrors] = useState({});

    const createTask = ({username, email, text}) =>
    {
        let form = new FormData();
        form.append("username", username);
        form.append("email", email);
        form.append("text", text);

        commonShowLoader();
        service.addTask(form).then(({status, message}) =>
        {
            if (status === "ok")
            {
                commonShowSuccess("Задача успешно добавлена");
                setTimeout(() => history.push("/"), 2000);
            } else
            {
                commonHideLoader();
                const errors = {...message};

                const formErrors = {};
                for (let {name} of inputs)
                {
                    if (errors[name])
                    {
                        formErrors[name] = errors[name];
                        delete errors[name];
                    }
                }

                setErrors(formErrors);
                if (Object.keys(errors).length > 0) commonShowError(errors);

            }
        });
    }

    return (
        <LoadingHanler>
            <Form action={createTask} inputs={inputs} initialState={initialState} errors={errors} buttonText="Добавить"
                  header="Добавление задачи"/>
        </LoadingHanler>
    );
};



export default compose(
    connect(null, {commonShowLoader, commonHideLoader, commonShowSuccess, commonShowError}),
    withService()
)(AddTaskPage);



