import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';
import Carousel from 'react-elastic-carousel';
import Item from '../Item';
import img from "../../assests/images/service22.jpg";
import {Grid,Paper} from '@material-ui/core';


const breakPoints=[
  {width:1,itemsToShow:1},
  {width:550,itemsToShow:2},
  {width:768,itemsToShow:3},
  {width:1200,itemsToShow:4}
]

function Products() {
  return (
    <>
     
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      {/* <HeroSection {...homeObjOne} /> */}
      {/* <Pricing/> */}
      {/* <Pricing/> */}

      {/* <Carousel breakPoints={breakPoints} swipeable={true} className="hi">
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item> */}
        




       
        {/* <Item>One</Item> */}
        {/* </Carousel> */}

         {/* <Pricing/> */}

         

     



    </>
  );
}

export default Products;



