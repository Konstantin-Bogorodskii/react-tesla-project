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
      <Section
        title="Lowest Cost Solar Panels in America"
        subtitle="Money-back guarantee"
        btnLeft="Order Now"
        btnRight="Learn More"
        background="solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        subtitle="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        btnLeft="Order Now"
        btnRight="Learn More"
        background="solar-roof.jpg"
      />
      <Section title="Accessories" subtitle="" btnLeft="Show now" background="accessories.jpg" />
    </div>
  );
};

export default Home;
