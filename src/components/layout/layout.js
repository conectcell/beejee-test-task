import React from 'react';
import AlertsHandler from "../handlers/alerts-handler/alerts-handler";
import AuthHandler from "../handlers/auth-handler";
import Navigation from "../navigation/navigation";
import RedirectHandler from "../handlers/redirect-handler";
import "./layout.css"


const Layout = ({children}) =>
{
    return (
        <AlertsHandler>
            <AuthHandler>
                <RedirectHandler>
                    <Navigation/>
                    <div className="container" id="container">
                        <div className="bg-light p-5 rounded" id="main-content">
                            <div className="col-sm-12">
                                {children}
                            </div>
                        </div>
                    </div>
                </RedirectHandler>
            </AuthHandler>
        </AlertsHandler>
    );
};



export default Layout;
