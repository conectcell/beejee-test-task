import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import compose from "../../utlis/compose";
import {withService} from "../../components/hoc-helpers";
import {connect} from "react-redux";
import {sagaLogout} from "../../redux/actions/saga-actions";


const LogoutPage = ({loggedIn, sagaLogout}) =>
{


    useState(() => sagaLogout(), []);

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
    connect(mapStateToProps, {sagaLogout})
)(LogoutPage);
