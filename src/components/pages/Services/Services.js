import React from 'react';
import HeroSection from '../../common/HeroSection/HeroSection';
import { homeObjOne, homeObjThree, homeObjFour } from './Data';

function Services() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Services;
