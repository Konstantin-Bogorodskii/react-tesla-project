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
      <BurgerNav show={isOpen} className="list-reset">
        <CloseWrapper>
          <CustomClose onClick={() => setIsOpen(false)} />
        </CloseWrapper>
        <li>
          <StyledLink to="/">shop</StyledLink>
        </li>
        <li>
          <StyledLink to="/login">Tesla Account</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Existing Inventory</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Used Inventory</StyledLink>
        </li>
        <li>
          <StyledLink to="/">Trade-In</StyledLink>
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
    </div>
  );
};

export default Header;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
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
