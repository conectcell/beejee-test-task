import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {commonHideError, commonHideSuccess} from "../../redux/actions/common-actions";

const AlertsHandler = ({children, success, error, commonHideSuccess, commonHideError}) =>
{

    useEffect(() => {
        if(error != null){
            setTimeout(() => {
                commonHideError();
            }, 2000)
        }
    }, [error, commonHideError])


    useEffect(() => {
        if(success != null){
            setTimeout(() => {
                commonHideSuccess();
            },2000)
        }
    }, [success, commonHideSuccess])


    const showError = () => {
        if(typeof error === 'string') return (
            <div className="big-alert alert alert-danger">
                {error}
            </div>
        )
        else {
            return (
                <div className="big-alert alert alert-danger">
                    <ul>
                        {Object.keys(error).map(k => {
                            return (
                                <li key={error[k]}>{error[k]}</li>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }

    const showSuccess = () =>  (
        <div className="big-alert alert alert-success">
            {success}
        </div>
    );

    return (
        <>
            {error !== null && showError()}
            {success !== null && showSuccess()}
            {children}
        </>
    );
};

const mapStateToProps = state => {
    return { success: state.common.globalSuccess, error: state.common.globalError };
};

export default connect(mapStateToProps, {commonHideSuccess, commonHideError})(AlertsHandler);
