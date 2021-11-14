import React from 'react';
import styled from 'styled-components';

function MyInput({ id, type, useInput, text }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      {useInput.isDirty && useInput.isEmailCorrect && (
        <div style={{ color: 'darkred', padding: '5px 20px' }}>{useInput.isEmailCorrectText}</div>
      )}
      {useInput.isDirty && useInput.isFirstNameCorrect && (
        <div style={{ color: 'darkred', padding: '5px 20px' }}>{useInput.firstNameError}</div>
      )}
      {useInput.isDirty && useInput.isLastNameCorrect && (
        <div style={{ color: 'darkred', padding: '5px 20px' }}>{useInput.lastNameError}</div>
      )}
      <Input
        type={type}
        id={id}
        value={useInput.value}
        onChange={e => useInput.onChange(e)}
        onBlur={e => useInput.onBlur(e)}
        autoComplete="off"
        name={id}
        placeholder={useInput.isDirty && useInput.isEmpty ? useInput.emptyError : null}
      />
    </>
  );
}

const Input = styled.input`
  &::placeholder {
    color: darkred;
  }
`;

export default MyInput;
