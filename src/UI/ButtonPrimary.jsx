import React from 'react';
import styled from 'styled-components';

function ButtonPrimary({ name, type, onClick, useInputs }) {
  const [userEmail, userPassword, userFirstName = {}, userLastName = {}] = useInputs;

  return (
    <Button
      disabled={
        !userFirstName.inputValid ||
        !userLastName.inputValid ||
        !userEmail.inputValid ||
        !userPassword.inputValid
      }
      onClick={onClick}
      type={type}
    >
      {name}
    </Button>
  );
}

const Button = styled.button`
  background-color: #3e6ae1;
  border: none;
  padding: 12px 40px;
  border-radius: 50px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-bottom: 30px;
  transition: all 0.4s;

  &:hover {
    background-color: #3457b1;
  }
`;

export default ButtonPrimary;
