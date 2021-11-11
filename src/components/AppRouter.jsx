import React from 'react';
import { publicRoutes, privateRoutes } from '../router/routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './../store/reducers/userSlice';

function AppRouter() {
  const user = useSelector(selectUser);
  console.log(user);

  return user ? (
    <Switch>
      {privateRoutes.map(route => {
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
  ) : (
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
      <Redirect to="/login" />
    </Switch>
  );
}

export default AppRouter;
