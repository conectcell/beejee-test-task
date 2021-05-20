import React from 'react';
import './spinner.css';

import spinner from '../../assets/spinner.svg';

const Spinner = () =>
{
    return (
        <div className="spinner">
            <img src={spinner} alt='Spinner'/>
        </div>
    );
};

export default Spinner;
