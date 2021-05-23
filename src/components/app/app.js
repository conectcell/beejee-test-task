import React from 'react';
import {Provider} from "react-redux";

import BeejeeService from "../../services/beejee-service";
import ErrorBoundry from "../error-boundry";
import {ServiceProvider} from "../service-context"


import store from "../../redux/store";


import './app.css';
import AppRouter from "../app-router";


const service = new BeejeeService();

const App = () =>
{


    return (
        <ErrorBoundry>
            <Provider store={store}>
                <ServiceProvider value={service}>
                    <AppRouter/>
                </ServiceProvider>
            </Provider>
        </ErrorBoundry>
    );

}

export default App;
