import React from 'react';
import {connect} from 'react-redux';
import AlertsHandler from "../alerts-handler/alerts-handler";
import AuthHandler from "../auth-handler";
import Navigation from "../navigation/navigation";

import "./layout.css"


const Layout = ({children, loading}) =>
{
    return (
        <AlertsHandler>
            <AuthHandler>
                <Navigation/>
                <div className="container" id="container">
                    <div className="bg-light p-5 rounded">
                        <div className="col-sm-12">
                            {children}
                        </div>
                    </div>
                </div>
            </AuthHandler>
        </AlertsHandler>
    );
};

const mapStateToProps = state =>
{
    return {loading: state.common.loading};
};

export default connect(mapStateToProps, null)(Layout);
