import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from './Data';
// import Pricing from '../../Pricing';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFive} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjFive} />
    </>
  );
}

export default Home;
