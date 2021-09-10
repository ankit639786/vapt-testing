import React from 'react';
import HeroSection from '../../common/HeroSection/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Vapt() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Vapt;
