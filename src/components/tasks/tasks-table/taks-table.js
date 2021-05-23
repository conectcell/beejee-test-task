import React from 'react';
import TaskRow from "../task-row";
import compose from "../../../utlis/compose";
import {connect} from "react-redux";
import {withService} from "../../hoc-helpers";

const TasksTable = ({loggedIn, tasks, searchParams: {page}}) =>
{
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Пользователь</th>
                <th scope="col">Почта</th>
                <th scope="col">Текст</th>
                <th scope="col">Статус</th>
                {loggedIn && <th scope="col">Редактирование</th>}

            </tr>
            </thead>
            <tbody>

            {tasks.map((task, i) =>
            {
                const nm = (page - 1) * 3 + i + 1;
                return (
                    <TaskRow
                        key={`task-${task.id}-${i}`}
                        number={nm}
                        loggedIn={loggedIn}
                        {...task}
                    />
                )
            })}
            </tbody>
        </table>
    );
};


const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    tasks: state.tasks.tasksList,
    searchParams: state.tasks.tasksSearchParams
})

export default compose(
    connect(mapStateToProps, null),
    withService()
)(TasksTable);
