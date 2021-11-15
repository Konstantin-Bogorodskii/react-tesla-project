/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classes from './Header.module.css';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import HeaderMenuItem from './HeaderMenuItem';
import { animateScroll as scroll } from 'react-scroll';
import Burger from '../Burger';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../store/reducers/userSlice';
import { openBurger, selectBurger } from '../../store/reducers/burgerSlice';

const Header = () => {
  const user = useSelector(selectUser);
  const burger = useSelector(selectBurger);
  const dispatch = useDispatch();

  return (
    <div className={classes.wrap}>
      <div className={classes.headerLogo} onClick={() => scroll.scrollToTop()}>
        <Link to="/">
          <img className={classes.headerLogoImg} src="/images/logo.svg" alt="Tesla Logo" />
        </Link>
      </div>
      <ul className={`list-reset ${classes.menu}`}>
        <HeaderMenuItem text="model s" to="model-s" />
        <HeaderMenuItem text="model y" to="model-y" />
        <HeaderMenuItem text="model 3" to="model-3" />
        <HeaderMenuItem text="model x" to="model-x" />
        <HeaderMenuItem text="Solar Panels" to="solar-panels" />
        <HeaderMenuItem text="Solar roofs" to="new-roofs" />
      </ul>
      <div className={classes.rightMenu}>
        <Link to="/" className={classes.rightMenuLink}>
          Shop
        </Link>
        <Link to={user ? '/account' : '/login'} className={classes.rightMenuLink}>
          Tesla Account
        </Link>
        <CustomMenu onClick={() => dispatch(openBurger())} />
      </div>
      <Burger />
    </div>
  );
};

export default Header;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
