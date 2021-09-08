import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-scroll';

import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Menu from './Menu'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const obj = [
    {
      menu:"Vapt",
      ids:"vapt",
      sub_menu:[
        {ids:"vapt",subMenu:"VAPT"},
        {ids:"vapt_assessment",subMenu:"Why do Vulnerability Assessment"},
        {ids:"vapt_process",subMenu:"Vulnerability Assessment Process"},
        {ids:"vapt_tools",subMenu:"Tools for Vulnerability Scanning"},
        {ids:"vapt_types",subMenu:"Types of a vulnerability scanner"}
      ]
    },
    {
      menu:"Services",
      ids:"service",
      sub_menu:[
        {ids:"service",subMenu:"Service"},
      ]
    },
    {
      menu:"About Us",
      ids:"about",
      sub_menu:[
        {ids:"about",subMenu:"About Us"},
        {ids:"why_us",subMenu:"Why Choose Us"},
      ]
    },
    {
      menu:"FAQs",
      ids:"faq",
    },
  ]

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to="vapt" spy={true} smooth={true} className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
              VAPT
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {
                obj?.map(item=>
                  <li className='nav-item' style={{cursor:"pointer"}}>
                    <Link to={item?.ids} spy={true} smooth={true} className='nav-links' onClick={closeMobileMenu}>
                      {/* <Menu navMenu={item}/> */}
                      {item?.menu}
                    </Link>
                </li>
                )
              }              
              <li className='nav-btn'>
                {button ? (
                  <Link to="contact" spy={true} smooth={true} className='btn-link'>
                    <Button buttonStyle='btn--outline'>Contact Us</Button>
                  </Link>
                ) : (
                  <Link to="contact" spy={true} smooth={true} className='btn-link'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu} >
                      Contact Us
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
