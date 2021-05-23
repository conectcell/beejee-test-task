import React, {useState} from 'react';
import {connect} from "react-redux";


import {dictionaries} from "../../../utlis";
import Form from "../../forms/form";
import LoadingHandler from "../../handlers/loading-handler/loading-handler";
import './task-row.css'
import compose from "../../../utlis/compose";

import {withService} from "../../hoc-helpers";
import {sagaEditTask} from "../../../redux/actions/saga-actions";

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


const TaskRow = ({id, username, email, text, status, number, loggedIn, service, errors, sagaEditTask}) =>
{

    const [loading, setLoading] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const updateTask = ({text, status}) =>
    {
        setLoading(true)

        let form = new FormData();
        form.append("text", text);
        form.append("status", status);
        form.append("token", service.getToken());
        sagaEditTask(id, form)
    }


    const editRowRender = () =>
    {
        initialState.status = status;
        initialState.text = text;
        return (
            <div className="task-edit-row" key={`task-editor-${id}`}>
                <LoadingHandler>
                    <Form loading={loading} action={updateTask} inputs={inputs} initialState={initialState}
                          errors={errors} buttonText="Сохранить" header="Добавление задачи" horizontal={true}/>
                </LoadingHandler>
            </div>
        )
    }

    return (
        <tr key={`task-${id}`}>
            <td>{number}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{text}</td>
            <td>{statuses[status]}</td>
            {loggedIn && <td>
                <button onClick={() => setShowEdit(!showEdit)} className="btn btn-info">Редактировать</button>
                {showEdit && editRowRender()}
            </td>}
        </tr>
    );
};

const mapStateToProps = state => ({errors: state.formErrors.editTaskFormErrors})

export default compose(
    connect(mapStateToProps, {sagaEditTask}),
    withService()
)(TaskRow);
