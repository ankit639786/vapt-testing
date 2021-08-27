import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Pricing/>
      <HeroSection {...homeObjThree} />
      {/* <Pricing/> */}


      {/* <HeroSection {...homeObjTwo} /> */}
    </>
  );
}

export default Products;
