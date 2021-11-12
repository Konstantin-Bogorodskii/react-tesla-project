import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Account() {
  const handlerLogout = () => {};

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
            <StyledLink onClick={handlerLogout}>log out</StyledLink>
          </li>
        </MenuList>
      </Header>
    </Wrap>
  );
}

const Wrap = styled.div``;
const Header = styled.div``;
const Logo = styled.div``;
const MenuList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const StyledLink = styled(Link)`
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
// const Wrap = styled.div``;

export default Account;
