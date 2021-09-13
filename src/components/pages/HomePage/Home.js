import React from 'react';
import HeroSection from '../../common/HeroSection/HeroSection';
import { homeObjOne } from './Data';
import Cards from "../../common/Card/Card";
import Contact from '../Contact/Contact';
import './Home.css';
import Vapt from '../vapt/Vapt';
import About from '../About/About';
import Faq from '../Faq/Faq';
import Carousel from '../../common/Carousel/Carousel';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <Vapt/>
      <Cards/>
      <About />
      <Contact />
      <Faq />
      <Carousel/>
    </>
  );
}

export default Home;
