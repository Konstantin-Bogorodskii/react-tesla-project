import React from 'react';
import Section from './../Section/Section';

const Home = () => {
  return (
    <div>
      <Section
        title="Model S"
        subtitle="Order Online for Touchless Delivery"
        btnLeft="Custom Order"
        btnRight="Existing Inventory"
        background="model-s.jpg"
      />
      <Section
        title="Model Y"
        subtitle="Order Online for Touchless Delivery"
        btnLeft="Custom Order"
        btnRight="Existing Inventory"
        background="model-y.jpg"
      />
      <Section
        title="Model 3"
        subtitle="Order Online for Touchless Delivery"
        btnLeft="Custom Order"
        btnRight="Existing Inventory"
        background="model-3.jpg"
      />
      <Section
        title="Model X"
        subtitle="Order Online for Touchless Delivery"
        btnLeft="Custom Order"
        btnRight="Existing Inventory"
        background="model-x.jpg"
      />
    </div>
  );
};

export default Home;
