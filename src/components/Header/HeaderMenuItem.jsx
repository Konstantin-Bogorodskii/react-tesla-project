import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-scroll';

function HeaderMenuItem({ text, to }) {
  return (
    <li>
      <NavLink to={to} smooth={true} duration={1000}>
        {text}
      </NavLink>
    </li>
  );
}

const NavLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  padding: 10px 10px 3px;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #232528;
    opacity: 0.4;
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover {
    &::before {
      left: 0;
      right: auto;
      width: 100%;
    }
  }
`;

export default HeaderMenuItem;
