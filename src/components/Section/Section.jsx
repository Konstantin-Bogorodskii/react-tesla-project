import React from 'react';
import classes from './Section.module.css';

function Section({ title, subtitle, background, btnLeft, btnRight }) {
  return (
    <div className={classes.wrap} style={{ backgroundImage: `url('/images/${background}')` }}>
      <div className={classes.textWrap}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div>
        <div className={classes.btnWrap}>
          <button className={`${classes.btn} btn-reset`}>{btnLeft}</button>
          {btnRight ? (
            <button className={`${classes.btn} btn-reset ${classes.rightBtn}`}>{btnRight}</button>
          ) : null}
        </div>
        <img src="/images/down-arrow.svg" alt="Scroll Down" className={classes.arrowDown} />
      </div>
    </div>
  );
}

export default Section;
