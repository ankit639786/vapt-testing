import React from 'react';
import HeroSection from '../../common/HeroSection/HeroSection';
import { homeObjTwo, homeObjThree } from './Data';

function Products() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Products;



