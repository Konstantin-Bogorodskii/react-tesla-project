import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Burger from './Burger';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { openBurger } from '../store/reducers/burgerSlice';
import { logout, selectUser } from '../store/reducers/userSlice';
import Car from './Car';
import { auth } from '../firebase-config';

function Account() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const handlerLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push('/login');
      })
      .catch(err => alert(err.message));
  };

  return (
    <Wrap>
      <Header>
        <Logo>
          <Link to="/">
            <img src="/images/logo.svg" alt="Tesla Logo" />
          </Link>
        </Logo>
        <MenuList className="list-reset">
          <li>
            <StyledLink to="/account">model s</StyledLink>
          </li>
          <li>
            <StyledLink to="/account">model 3</StyledLink>
          </li>
          <li>
            <StyledLink to="/account">model x</StyledLink>
          </li>
          <li>
            <StyledLink to="/account">model y</StyledLink>
          </li>
          <li>
            <StyledLink to="/account">solar roof</StyledLink>
          </li>
          <li>
            <StyledLink to="/account">solar panels</StyledLink>
          </li>
          <li>
            <StyledLink to="" onClick={handlerLogout}>
              log out
            </StyledLink>
          </li>
          <CustomMenu onClick={() => dispatch(openBurger())} />
          <Burger />
        </MenuList>
      </Header>
      <Info>
        <Person>
          <h4>{user?.displayName + ''}</h4>
        </Person>
        <InfoRight>
          <Link to="/account">Home</Link>
          <Link to="/account">Account</Link>
          <Link to="/account">History</Link>
          <Link to="" onClick={handlerLogout}>
            Sign Out
          </Link>
        </InfoRight>
      </Info>
      <Cars>
        <Car img="/images/tesla-s.jpg" model="model s" testDrive />
        <Car img="/images/tesla-x.jpg" model="model x" />
      </Cars>
    </Wrap>
  );
}

const Wrap = styled.div``;
const Header = styled.div`
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222222;
  color: white;
`;
const Logo = styled.div`
  img {
    object-fit: contain;
    width: 80px;
    filter: brightness(0) invert(1);
  }
`;

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 15px;
  z-index: 0;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 140px;
  padding-bottom: 30px;
`;
const Person = styled.div`
  h4 {
    font-weight: 700;
    text-transform: capitalize;
    font-size: x-large;
  }
`;
const InfoRight = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #393c41;
    font-size: smaller;
    transition: all 0.2s;
    text-transform: capitalize;

    &:hover {
      color: black;
      font-weight: 500;
    }
  }
`;
const Cars = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  padding-bottom: 40px;
`;

export default Account;
