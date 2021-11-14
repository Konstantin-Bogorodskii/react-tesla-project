import React, { useEffect } from 'react';
import { publicRoutes, privateRoutes } from '../router/routes';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './../store/reducers/userSlice';
import { auth } from '../firebase-config';

function AppRouter() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
