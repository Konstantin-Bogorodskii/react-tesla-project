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
    </>
  );
}

export default MyInput;
