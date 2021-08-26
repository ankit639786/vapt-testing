import React from 'react';
import './ContactUs.css';
// import { Button } from '../Navbar/Button';
import { Button } from '../../Button';
import { Card } from "react-bootstrap";



function ContactUs() {
  return (
    <>
      <h1 style={{ marginLeft: "19%" }}>
        Contact Us
      </h1>
      <Card className='footer-container' style={{ backgroundColor: "gray", marginLeft: "20%", marginRight: "20%", marginTop: "5%", marginBottom: "5%", borderRadius: "10px", backgroundColor: "#45B3A3" }}>
        <div className=''>
          <form>
            <input className='footer-input' name='name' type='text' placeholder='Your Name' />
            <input className='footer-input' name='email' type='email' placeholder='Your Email' />
            <div>
              <input className='footer-input1' name='Description' type='textArea' placeholder='Description' />
            </div>
          </form>
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </div>
      </Card>
    </>
  );
}

export default ContactUs;

