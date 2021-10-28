import React from 'react';
import classes from './SectionText.module.css';

function SectionText({ title, subtitle }) {
  return (
    <div className={classes.wrap}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default SectionText;
