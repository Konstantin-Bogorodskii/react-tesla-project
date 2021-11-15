import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBurger, openBurger, closeBurger } from '../store/reducers/burgerSlice';
import { logout, selectUser } from '../store/reducers/userSlice';
import { auth } from '../firebase-config';

function Burger() {
  const dispatch = useDispatch();
  const burger = useSelector(selectBurger);
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
    <BurgerNav show={burger} className="list-reset">
      <CloseWrapper>
        <CustomClose onClick={() => dispatch(closeBurger())} />
      </CloseWrapper>
      <li>
        <StyledLink to="" onClick={handlerLogout}>
          LOG OUT
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/">shop</StyledLink>
      </li>
      <li>
        <StyledLink to={user ? '/account' : '/login'}>Tesla Account</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Existing Inventory</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Used Inventory</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Roadaster</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Semi</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Charging</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Powerwall</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Test Drive</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Find Us</StyledLink>
      </li>
      <li>
        <StyledLink to="/">Support</StyledLink>
      </li>
    </BurgerNav>
  );
}

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 15px;
  padding-left: 10px;
  transition: all 0.4s ease-out;

  &:hover,
  &:focus {
    transform: translateX(15px);
    color: #232528;
  }
`;

export default Burger;
