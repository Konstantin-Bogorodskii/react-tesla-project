import React from 'react';
import classes from './Section.module.css';
import Fade from 'react-reveal/Fade';

function Section({ title, subtitle, background, btnLeft, btnRight, id }) {
  return (
    <section id={id}>
      <div className={classes.wrap} style={{ backgroundImage: `url('/images/${background}')` }}>
        <Fade bottom>
          {' '}
          <div className={classes.textWrap}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </Fade>
        <Fade bottom>
          <div>
            <div className={classes.btnWrap}>
              <button className={`${classes.btn} btn-reset`}>{btnLeft}</button>
              {btnRight ? (
                <button className={`${classes.btn} btn-reset ${classes.rightBtn}`}>
                  {btnRight}
                </button>
              ) : null}
            </div>
            <img src="/images/down-arrow.svg" alt="Scroll Down" className={classes.arrowDown} />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Section;
