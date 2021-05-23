import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useHistory, useLocation} from 'react-router-dom';
import {commonRedirect} from "../../../redux/actions/common-actions";


const RedirectHandler = ({children, redirect, commonRedirect}) =>
{
    const location = useLocation();
    const history = useHistory();

    useEffect(()=>{
        if(redirect !== null){
            if(location.pathname !== redirect){
                history.push(redirect);
            }
            commonRedirect(null);
        }

    },[redirect])

    return (
        <>
            {children}
        </>
    );
};

const mapStateToProps = state => ({redirect: state.common.redirect})
export default connect(mapStateToProps, {commonRedirect})(RedirectHandler);
