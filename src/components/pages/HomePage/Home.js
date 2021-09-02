import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import Cards from "./Card";
import Contact from '../Contact/Contact'
// import Pricing from '../../Pricing';
import Carousel from 'react-elastic-carousel';
import Item from '../Item';
import img from "../../assests/images/service22.jpg";
import './Home.css';


const breakPoints=[
  {width:1,itemsToShow:1},
  {width:550,itemsToShow:2},
  {width:768,itemsToShow:3},
  {width:1200,itemsToShow:4}
]

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFive} />
      <Cards/>
      <Contact />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjFive} />
      
      <h1 style={{textAlign:'center',fontSize:"45px"}}>Testing Services</h1>

      <Carousel breakPoints={breakPoints} swipeable={true} className="hi">
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        </Carousel>
    </>
  );
}

export default Home;
