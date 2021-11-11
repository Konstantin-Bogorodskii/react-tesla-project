// import Login from '../components/Login';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';

// export const privateRoutes = [{ path: '/', component: Home, exact: true }];
export const publicRoutes = [
  { path: '/', component: Home, exact: true },
  { path: '/login', component: Login, exact: true },
];
