import React from 'react';

function MyInput({ id, type, value, onChange, text }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} value={value} onChange={onChange} autoComplete="off" />
    </>
  );
}

export default MyInput;
