import React from 'react';

function MyInput({ id, type, useInput, text }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        value={useInput.value}
        onChange={e => useInput.onChange(e)}
        onBlur={e => useInput.onBlur(e)}
        autoComplete="off"
        name={id}
      />
      {useInput.isDirty && useInput.isEmpty && (
        <div style={{ color: 'red', margin: '5px 0' }}>{useInput.emptyError}</div>
      )}
      {useInput.isDirty && useInput.isEmailCorrect && (
        <div style={{ color: 'red' }}>{useInput.isEmailCorrectText}</div>
      )}
    </>
  );
}

export default MyInput;
