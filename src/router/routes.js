import Account from '../components/Account';
import Home from '../components/Home/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export const privateRoutes = [
  { path: '/', component: Home, exact: true },
  { path: '/account', component: Account, exact: true },
];
export const publicRoutes = [
  { path: '/', component: Home, exact: true },
  { path: '/login', component: Login, exact: true },
  { path: '/signup', component: SignUp, exact: true },
];
