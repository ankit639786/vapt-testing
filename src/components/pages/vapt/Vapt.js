import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
//import Pricing from '../../Pricing';
//import Card from './Card'

function Vapt() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      
      <HeroSection {...homeObjThree} />
      {/* <Pricing /> */}
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjTwo} />
      
    </>
  );
}

export default Vapt;
