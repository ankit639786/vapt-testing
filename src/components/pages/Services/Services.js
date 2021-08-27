import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Card from './Card'

function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      {/* <Pricing /> */}
      <HeroSection {...homeObjFour} />
      <Card />
    </>
  );
}

export default Services;
