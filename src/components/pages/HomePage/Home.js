import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjThree } from './Data';
import Cards from "./Card";
import Contact from '../Contact/Contact'
// import Pricing from '../../Pricing';
import Carousel from 'react-elastic-carousel';
import Item from '../Item';
import img from "../../assests/images/service22.jpg";
import './Home.css';
<<<<<<< HEAD
//import Faq from "../../Faq";
=======
import Vapt from '../vapt/Vapt';
import About from '../Products/Products';
import Faq from '../Faq/Faq'
>>>>>>> 920aea27d14d367bcd6a7fdb06b77ab04cd6a9ea



// const breakPoints=[
//   {width:1,itemsToShow:1},
//   {width:550,itemsToShow:2},
//   {width:768,itemsToShow:3},
//   {width:1200,itemsToShow:4}
// ]

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <Vapt/>
      <Cards/>
<<<<<<< HEAD
     
      {/* <Contact /> */}
      {/* <HeroSection {...homeObjFour} /> */}
      {/* <HeroSection {...homeObjFive} /> */}
=======
      <About />
      <Contact />
      <Faq />
>>>>>>> 920aea27d14d367bcd6a7fdb06b77ab04cd6a9ea
      
      {/* <h1 style={{textAlign:'center',fontSize:"45px", marginTop:"5rem"}}>Testing Services</h1>

      <Carousel breakPoints={breakPoints} swipeable={true} className="hi">
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>

        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
        <Item><img src={img} style={{borderRadius:"5px"}}/></Item>
<<<<<<< HEAD
        </Carousel>

       
=======
        </Carousel> */}
>>>>>>> 920aea27d14d367bcd6a7fdb06b77ab04cd6a9ea
    </>
  );
}

export default Home;
