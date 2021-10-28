import React from 'react';
import classes from './SectionButtons.module.css';

function SectionButtons() {
  return (
    <div className={classes.wrap}>
      <button>Custom Order</button>
      <button>Existing Inventory</button>
    </div>
  );
}

export default SectionButtons;
