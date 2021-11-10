import React from 'react';
import { publicRoutes } from '../router/routes';
import { Route, Routes } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
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
    </Routes>
  );
}

export default AppRouter;
