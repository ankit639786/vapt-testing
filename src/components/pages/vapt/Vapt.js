import React from 'react';
import HeroSection from '../../common/HeroSection/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import Carousel from '../../common/Carousel/Carousel';

function Vapt() {
  return (
    <>
      <HeroSection {...homeObjFive} />
      <HeroSection {...homeObjOne} />
      <Carousel />
      {/* <HeroSection {...homeObjThree} /> */}
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Vapt;
