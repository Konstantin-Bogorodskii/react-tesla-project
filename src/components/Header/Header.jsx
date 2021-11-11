/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classes from './Header.module.css';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import HeaderMenuItem from './HeaderMenuItem';
import { animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <HeaderMenuItem text="new roofs" to="new-roofs" />
      </ul>
      <div className={classes.rightMenu}>
        <Link to="/" className={classes.rightMenuLink}>
          Shop
        </Link>
        <Link to="/login" className={classes.rightMenuLink}>
          Tesla Account
        </Link>
        <CustomMenu onClick={() => setIsOpen(true)} />
      </div>
      <BurgerNav show={isOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setIsOpen(false)} />
        </CloseWrapper>
        <HeaderMenuItem text="shop" to="/" />
        <HeaderMenuItem text="Tesla Account" to="/" />
        <HeaderMenuItem text="Existing Inventory" to="/" />
        <HeaderMenuItem text="Used Inventory" to="/" />
        <HeaderMenuItem text="Trade-in" to="/" />
        <HeaderMenuItem text="Cybertruck" to="/" />
        <HeaderMenuItem text="Roadaster" to="/" />
        <HeaderMenuItem text="semi" to="/" />
        <HeaderMenuItem text="Charging" to="/" />
        <HeaderMenuItem text="powerwall" to="/" />
        <HeaderMenuItem text="test drive" to="/" />
        <HeaderMenuItem text="find us" to="/" />
        <HeaderMenuItem text="support" to="/" />
      </BurgerNav>
    </div>
  );
};

export default Header;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
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
  overflox-y: scroll;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding-bottom: 15px;
      font-size: 15px;
      padding-left: 10px;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
