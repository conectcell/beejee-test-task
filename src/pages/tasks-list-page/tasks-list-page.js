import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {withService} from "../../components/hoc-helpers";
import compose from "../../utlis/compose";


import {commonHideLoader, commonShowError, commonShowLoader} from "../../redux/actions/common-actions";
import LoadingHanler from "../../components/loading-handler/loading-handler";
import TaskRow from "../../components/tasks/task-row";
import Pagination from "../../components/tasks/pagination";
import TasksSorter from "../../components/tasks/tasks-sorter";
import {dictionaries} from "../../utlis";

const sortTypes = dictionaries.sortTypes;

const TasksListPage = ({service, loggedIn, commonHideLoader, commonShowLoader, commonShowError}) =>
{

    const [tasks, setTasks] = useState([]);
    const [total, setTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(0);

    const getData = (p = page, s = sort) =>
    {

        setPage(p);
        setSort(s);
        const {sort_field, sort_direction} = sortTypes[s];
        const pararms = {page: p, sort_field, sort_direction};



        commonShowLoader();
        service.getTasksList(pararms).then(({status, message}) =>
        {
            commonHideLoader();
            if (status === "ok")
            {
                setTasks(message.tasks)
                setTotal(parseInt(message.total_task_count))
            } else
            {
                setTasks([]);
                setTotal(0);
                commonShowError(message);
            }
        });
    }

    useEffect(() =>
    {
        getData();
    }, [])



    const renderNoTasks = () =>
    {
        return (
            <h2>Пока нет ни одной задачи</h2>
        )
    }

    const renderTasksTable = () =>
    {
        return (
            <div className="table-responsive">
                <TasksSorter value={sort} onChange={(val) => {
                    if(val !== sort){
                        getData(page, val)

                    }

                }}/>
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
                        return (
                            <TaskRow
                                updateFunction={()=> getData()}
                                key={`task-${task.id}-${i}`}
                                number={(page - 1) + 1 + i}
                                loggedIn={loggedIn}
                                {...task}
                            />
                        )
                    })}

                    </tbody>
                </table>
                <Pagination page={page} perPage={3} total={total} changePage={(p)=> {
                    getData(p);
                }}/>
            </div>
        )
    }

    return (
        <LoadingHanler>
            {total > 0 ? renderTasksTable() : renderNoTasks()}
        </LoadingHanler>
    );
};


const mapStateToProps = state => ({loggedIn: state.auth.loggedIn})

export default compose(
    connect(mapStateToProps, {commonHideLoader, commonShowLoader, commonShowError}),
    withService()
)(TasksListPage);
