import React, {useState} from 'react';
import {Redirect, useHistory} from "react-router-dom";
import compose from "../../utlis/compose";
import {withService} from "../../components/hoc-helpers";
import {connect} from "react-redux";
import {authLogout} from "../../redux/actions/auth-actions";


const LogoutPage = ({service, loggedIn, authLogout}) =>
{


    useState(() =>
    {
        service.clearToken();
        setTimeout(()=> authLogout(), 1000);
    }, []);

    if(!loggedIn) return <Redirect to="/"/>

    return (
        <div>
            <h2>Вы успешно вышли из системы</h2>
            <p>Вы будете перенаправлены на главную страницу</p>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn
    }
}
export default compose(
    withService(),
    connect(mapStateToProps, {authLogout})
)(LogoutPage);
