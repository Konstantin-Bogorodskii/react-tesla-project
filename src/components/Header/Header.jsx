/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import classes from './Header.module.css';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.wrap}>
      <a href="#">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <ul className={`list-reset ${classes.menu}`}>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href="#">
            Model S
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href="#">
            Model 3
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href="#">
            Model X
          </a>
        </li>
        <li className={classes.menuItem}>
          <a className={classes.menuLink} href="#">
            Model Y
          </a>
        </li>
      </ul>
      <div className={classes.rightMenu}>
        <a href="#" className={classes.rightMenuLink}>
          Shop
        </a>
        <a href="#" className={classes.rightMenuLink}>
          Tesla Account
        </a>
        <CustomMenu onClick={() => setIsOpen(true)} />
      </div>
      <BurgerNav show={isOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setIsOpen(false)} />
        </CloseWrapper>
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
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model Y</a>
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

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
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
