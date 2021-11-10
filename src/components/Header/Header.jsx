/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classes from './Header.module.css';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.wrap}>
      <div className={classes.headerLogo}>
        <Link to="/home">
          <img className={classes.headerLogoImg} src="/images/logo.svg" alt="Tesla Logo" />
        </Link>
      </div>
      <ul className={`list-reset ${classes.menu}`}>
        <li className={classes.menuItem}>
          <Link className={classes.menuLink} to="/home">
            Model S
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.menuLink} to="/home">
            Model Y
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.menuLink} to="/home">
            Model 3
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.menuLink} to="/home">
            Model X
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.menuLink} to="/home">
            Solar Panels
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.menuLink} to="/home">
            Accessories
          </Link>
        </li>
      </ul>
      <div className={classes.rightMenu}>
        <Link to="/home" className={classes.rightMenuLink}>
          Shop
        </Link>
        <Link to="/home" className={classes.rightMenuLink}>
          Tesla Account
        </Link>
        <CustomMenu onClick={() => setIsOpen(true)} />
      </div>
      <BurgerNav show={isOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setIsOpen(false)} />
        </CloseWrapper>
        <li>
          <Link to="/home">Shop</Link>
        </li>
        <li>
          <Link to="/home">Tesla Account</Link>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">powerwall</a>
        </li>
        <li>
          <a href="#">test drive</a>
        </li>
        <li>
          <a href="#">support</a>
        </li>
        <li>
          <a href="#">find us</a>
        </li>
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
