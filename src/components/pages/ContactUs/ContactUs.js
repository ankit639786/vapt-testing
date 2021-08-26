import React from 'react';
import './ContactUs.css';
// import { Button } from '../Navbar/Button';
import { Button } from '../../Button';
// import {Card} from "react-bootstrap";
 import img from "../../Assets/Images/raj.png";
 import {Row,Col,Container} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import img1 from "../../Assets/Images/ra.jpg";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';





function ContactUs() {
  return (



<>
            <Grid container spacing={4} style={{width:"100%"}}>
                <Grid item lg={1}>
                </Grid>
                <Grid item lg={4}>
                <img className="img5" src={img}/>
                </Grid>

                <Grid item lg={7}>
                    
                        {/* <h1 style={{ color: "#45B3A3", fontSize: "33px", marginLeft: "35px", marginRight: "0px", marginBottom: "10px", marginTop: "10px" }}>OWASP Top 10 Application Penetration Test Cases</h1> */}
                        <Grid container spacing={4}>
                        <Grid item lg={3}>
                            </Grid>
                        <Grid item lg={12} sm={12} md={12} xs={12}>

                            <Card className="crd" style={{ fontSize: "20px",borderRadius:"10px",backgroundColor:"rgb(69, 179, 163,0.6)",padding:"1%",marginTop:"30px" }}>
                              <h1 className="Us">Contact Us</h1>

                       <Grid container spacing={4} style={{marginLeft:"15%",marginTop:"5px"}}>
                        
                        <Grid item lg={5} md={8} xs={8} sm={8}>
                          <p>Name</p>
                        <input
                        className='footer-input'
                        name='name'
                        type='text'
                        placeholder='Your Name'
                         />
                      
                      <p>Email</p>
                      <input
                        className='footer-input'
                        name='name'
                        type='email'
                        placeholder='Your Email'
                         />

                      <p>Contact No.</p>
                      <input
                        className='footer-input'
                        name='name'
                        type='number'
                        placeholder='Your No. '
                         />

                       <Button buttonStyle='btn--outline'>Submit</Button>

                         
                        </Grid>
                        


                       

                        

                        

                        
                       
                    </Grid>


                
            
  
          


             
         
        

                    </Card>
                           
                            </Grid>


                           
                           
                        </Grid>
                   
                </Grid>

            </Grid>
             <div style={{marginTop:"150px"}}>
    <p></p>

 </div>
        </>
  );
}

export default ContactUs;

