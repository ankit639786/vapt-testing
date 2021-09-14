import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        V@PT
        </p>
        <p className='footer-subscription-text'>
        Secure your Web Application from the Cyber Attacks.
        </p>
        {/* <div className='input-areas'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Your Email' />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link spy={true} smooth={true} to='about'>About Us</Link>
            <Link spy={true} smooth={true} to='why_us'>Why Choose Us?</Link>
          </div>
          <div className='footer-link-items'>
            <h2>VAPT</h2>
            <Link spy={true} smooth={true} to='vapt'>VAPT Services</Link>
            <Link spy={true} smooth={true} to='vapt_crucial'>Why Is VAPT Crucial to Your Business?</Link>
            <Link spy={true} smooth={true} to='vapt_process'>Vulnerability Assessment Process</Link>
            <Link spy={true} smooth={true} to='vapt_tools'>VAPT Testing Tools</Link>
            <Link spy={true} smooth={true} to='vapt_types'>Types of Vulnerability Scanner</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link spy={true} smooth={true} to='service'>VAPT Testing Services for Digital & IT Infrastructure</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Address</h2>
            <Link to='/'>Unit No. 650, 6th Floor,</Link>
            <Link to='/'>Tower A, Spaze iTechPark,</Link>
            <Link to='/'>Sector-49, Sohna Road,</Link>
            <Link to='/'>Gurgaon.</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='banner' spy={true} smooth={true} className='social-logo'>
              V@PT
            </Link>
          </div>
          <small className='website-rights'>V@PT2021</small>
          <div className='social-icons'>
            <Link className='social-icon-link' to='/' target='_blank' aria-label='Facebook' >
              <FaFacebook />
            </Link>
            <Link className='social-icon-link' to='/' target='_blank' aria-label='Instagram' >
              <FaInstagram />
            </Link>
            <Link className='social-icon-link' to="/" target='_blank' aria-label='Youtube' >
              <FaYoutube />
            </Link>
            <Link className='social-icon-link' to='/' target='_blank' aria-label='Twitter' >
              <FaTwitter />
            </Link>
            <Link className='social-icon-link' to='/' target='_blank' aria-label='LinkedIn' >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;