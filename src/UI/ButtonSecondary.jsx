import React from 'react';
import styled from 'styled-components';

function ButtonSecondary({ name, type, onClick }) {
  return (
    <Button onClick={onClick} type={type}>
      {name}
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  width: 100%;
  padding: 10px 0;
  border-radius: 50px;
  color: #171a20;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #171a20;
    color: #fff;
  }

  @media (max-width: 560px) {
    width: 98%;
  }
`;

export default ButtonSecondary;
