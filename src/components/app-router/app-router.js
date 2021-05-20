import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "../layout/layout";


import {TasksListPage, LoginPage, LogoutPage, AddTaskPage, EditTaskPage} from '../../pages'


const AppRouter = () =>
{
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/"
                           component={TasksListPage}
                           exact />
                    <Route
                        path="/login"
                        component={LoginPage}/>

                    <Route
                        path="/logout"
                        component={LogoutPage}/>

                    <Route
                        path="/add"
                        component={AddTaskPage}/>


                    <Route path="/edit/:id"
                           render={({ match }) => {
                               const { id } = match.params;
                               return <EditTaskPage id={id} />
                           }}/>


                    <Route render={() => <h2>Page not found</h2>} />
                </Switch>
            </Layout>
        </Router>

    );
};

export default AppRouter;
