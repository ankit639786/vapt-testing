import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import './HeroSection.css';

//import { Button } from './Button';
import { Button } from '../Button/Button';
import { Link } from 'react-scroll';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  redirectPage,
  descriptionArr,
  bulletPoints,
  pointDescription
}) {
  
  useEffect(()=>{
    Aos.init({duration: 3000});

  }, []);
  return (
    <>
      <div id={redirectPage&&redirectPage} className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'} >
        <div className='container'>
          <div className='row home__hero-row' style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
         
            <div className='col'>
              <div className='home__hero-text-wrapper'>
              {/* <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div> */}
                {topLine&&<div className='top-line'>{topLine}</div>}
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p className={ lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark' } >
                  {description}
                </p>
                {
                  descriptionArr?.map((ele,index) =>
                    <p key={index} className={ lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark' } >
                      {ele}
                    </p>
                  )
                }
                {
                  pointDescription?.map(ele =>
                    <p key={ele?.id} className={ lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark' } >
                      <b>{`${ele?.name}`}</b>
                      <p>{ele?.Desc_}</p>
                    </p>
                  )
                }
                <ul>
                {
                  bulletPoints?.map(ele =>
                    <li className={ lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark' } >
                      {ele}
                    </li>
                  )
                }
                </ul>
                {
                buttonLabel&&
                <Link to="contact" spy={true} smooth={true}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>}
              </div>
            </div>
            <div className='col'>
            <div data-aos={imgStart ==="start" ? "fade-right" : "fade-left"}>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
