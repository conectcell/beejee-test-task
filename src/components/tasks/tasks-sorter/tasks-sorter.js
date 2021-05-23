import React from 'react';
import {dictionaries} from "../../../utlis";

import './tasks-sorter.css';

const sortTypes = dictionaries.sortTypes;

const TasksSorter = ({onChange, value = 0}) =>
{
    return (
        <div className="col-md-6 col-sm-12 float-right sorter">
            <select className="form-control" value={value} onChange={event => onChange(event.target.value)}>
                {Object.keys(sortTypes).map(i =>
                {
                    const {name} = sortTypes[i];
                    return (
                        <option value={i} key={`task-sorter-${i}-${name}`}>{name}</option>
                    )
                })}
            </select>

        </div>
    );
};

export default TasksSorter;
