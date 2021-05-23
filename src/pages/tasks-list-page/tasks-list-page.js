import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import {withService} from "../../components/hoc-helpers";
import compose from "../../utlis/compose";

import LoadingHandler from "../../components/handlers/loading-handler/loading-handler";
import Pagination from "../../components/tasks/pagination";
import TasksSorter from "../../components/tasks/tasks-sorter";
import {dictionaries} from "../../utlis";
import {updateTasks} from "../../redux/actions/tasks-actions";
import {sagaGetTasksList} from "../../redux/actions/saga-actions";
import TasksTable from "../../components/tasks/tasks-table/taks-table";

const sortTypes = dictionaries.sortTypes;

const TasksListPage = ({update, updateTasks, total, sagaGetTasksList}) =>
{


    const [page, setPage] = useState(1);
    const [sort, setSort] = useState(0);

    const getData = (p = page, s = sort) =>
    {

        setPage(p);
        setSort(s);
        const {sort_field, sort_direction} = sortTypes[s];
        const pararms = {page: p, sort_field, sort_direction};

        sagaGetTasksList(pararms)

    }

    useEffect(getData, []);
    useEffect(() =>
    {
        if (update !== false)
        {
            updateTasks(false);
            getData();
        }
    }, [update]);

    const renderNoTasks = () => (<h2>Пока нет ни одной задачи</h2>)

    const renderData = () =>
        (
            <div className="table-responsive">
                <TasksSorter value={sort} onChange={(val) =>
                {
                    if (val !== sort)
                    {
                        getData(page, val)

                    }
                }}/>
                <TasksTable/>
                <Pagination page={page} perPage={3} total={total} changePage={(p) =>
                {
                    getData(p);
                }}/>
            </div>
        )

    return (
        <LoadingHandler>
            {total > 0 ? renderData() : renderNoTasks()}
        </LoadingHandler>
    );
};


const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    update: state.tasks.updateTasks,
    total: state.tasks.totalTasks
})

export default compose(
    connect(mapStateToProps, {sagaGetTasksList, updateTasks}),
    withService()
)(TasksListPage);
