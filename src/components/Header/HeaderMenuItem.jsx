import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HeaderMenuItem({ text }) {
  return (
    <li>
      <NavLink to="/home">{text}</NavLink>
    </li>
  );
}

const NavLink = styled(Link)`
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  padding: 0 10px;
`;

export default HeaderMenuItem;
