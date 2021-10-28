import React from 'react';
import classes from './Section.module.css';
import SectionText from './SectionText/SectionText';
import SectionButtons from './SectionButtons/SectionButtons';

function Section() {
  return (
    <div className={classes.wrap}>
      <SectionText title="Model-X" subtitle="Order Online for Touchless Delivery" />
      <SectionButtons />
    </div>
  );
}

export default Section;
