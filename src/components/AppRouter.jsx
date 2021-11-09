import React from 'react';
import {  publicRoutes } from '../router/routes';
import { Route, Switch, Redirect } from 'react-router-dom';

function AppRouter() {

    <Switch>
    {publicRoutes.map(route => {
    return (
    <Route
    component={route.component}
    path={route.path}
    exact={route.exact}
    key={route.path}
    />
    );
    })}
    <Redirect to="/" />
    </Switch>
};


export default AppRouter;