import React, {useState} from 'react';
import {dictionaries} from "../../../utlis";
import Form from "../../forms/form";
import LoadingHanler from "../../loading-handler/loading-handler";
import './task-row.css'
import compose from "../../../utlis/compose";
import {connect} from "react-redux";
import {
    commonShowError,
    commonShowSuccess
} from "../../../redux/actions/common-actions";
import {withService} from "../../hoc-helpers";
import {authLogout} from "../../../redux/actions/auth-actions";

const statuses = dictionaries.statuses;

const inputs = [
    {
        name: 'status',
        label: 'Статус',
        type: 'select',
        options: statuses
    }, {
        name: 'text',
        validator: 'required',
        label: 'Текст задачи',
    },

];

const initialState = {
    status: '',
    text: '',
    validatedFields: {
        status: true,
        text: true,
    },
    errorMessages: {
        status: '',
        text: '',
    },
    validated: false,
};


const TaskRow = ({id, username, email, text, status, number, loggedIn, updateFunction, commonShowSuccess, commonShowError, service, authLogout}) =>
{

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [showEdit, setShowEdit] = useState(false);

    const createTask = ({text, status}) => {
        setLoading(true)

        let form = new FormData();
        form.append("text", text);
        form.append("status", status);
        form.append("token", service.getToken());

        service.editTask(id, form).then(({status, message}) =>
        {
            if (status == "ok")
            {
                commonShowSuccess("Информация сохранена");
                commonShowSuccess("Информация сохранена");
                updateFunction();
            } else
            {
                setLoading(false)
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

                if(message.token && message.token == "Токен истёк") {
                    service.clearToken();
                    authLogout();
                }

                setErrors(formErrors);
                if (Object.keys(errors).length > 0) commonShowError(errors);

            }
        });
    }



    const editRow = () => {
        initialState.status = status;
        initialState.text = text;
        return(
            <div className="task-edit-row">
                <LoadingHanler>
                    <Form loading={loading} action={createTask} inputs={inputs} initialState={initialState} errors={errors} buttonText="Сохранить" header="Добавление задачи" horizontal={true}/>
                </LoadingHanler>
            </div>
        )
    }

    return (
        <>
            <tr key={`task-${id}`}>
                <td scope="col">{number}</td>
                <td scope="col">{username}</td>
                <td scope="col">{email}</td>
                <td scope="col">{text}</td>
                <td scope="col">{statuses[status]}</td>
                {loggedIn && <td scope="col">
                    <button onClick={() => setShowEdit(!showEdit)} className="btn btn-info">Редактировать</button>
                    {showEdit && editRow()}
                </td>}
            </tr>

        </>
    );
};

export default compose(
    connect(null, {commonShowSuccess,  commonShowError, authLogout}),
    withService()
)(TaskRow);
