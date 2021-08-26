import React from 'react';
// import {Card,Row,Col,Container} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import img49 from "../../Assets/Images/download.png";
import img from "../../Assets/Images/section.png"
import './AboutUs.css';
import Card from '@material-ui/core/Card';
import img1 from "../../Assets/Images/profile1.png";
import img2 from "../../Assets/Images/profile2.png";
import {BiCheck} from "react-icons/bi";




const AboutUs = () => {
    return (


    <>
            <Grid container spacing={4} style={{width:"100%",backgroundColor:""}}>
                <Grid item lg={1}>
                </Grid>
                <Grid item lg={9} md={10} sm={12} xs={12} id="qt">
                    <h1 style={{fontSize: "25px", marginBottom: "10px", marginTop: "10px",marginLeft:"5px" }}>About Us</h1>
                    <Card style={{ fontSize: "20px",borderRadius:"10px",backgroundColor:"rgb(69, 179, 163,0.6)",paddingLeft:"1%",marginLeft:"5px" }}>
             What we do is rather simple. We provide our customers with the ideal Penetration Testing services. To help you understand this better, we do a podcast with our clients where they talk about their experiences with us and how they see us. We want you to hear all that we offer and how well it works out straight from our clients. So, pull out those headphones and listen close, because these are some pleasant journeys with VAPT.

                    </Card>
                </Grid>

                {/* <h1 style={{fontSize: "25px", marginBottom: "10px", marginTop: "10px" }} className="our">Services Offered</h1> */}



               

                <Grid item lg={9} style={{width:"100%"}}>
              
                <h1 style={{fontSize: "25px", marginBottom: "10px", marginTop: "10px" }} className="our">Services Offered</h1>
                
                    
                        
                        <Grid container spacing={4} style={{marginLeft:"15%"}}>
                        
                            <Grid item lg={3} md={6} xs={12} sm={12}>
                            <img className="img49" src={img}/>
                            <p className="p">Risk Assessment</p>
                            </Grid>


                            <Grid item lg={3} md={6} xs={12} sm={12}>
                            <img className="img49" src={img}/>
                            <p className="p">Risk Management</p>

                            </Grid>

                            <Grid item lg={3} md={6} xs={12} sm={12}>
                            <img className="img49" src={img}/>
                            <p className="p">Risk Solutions</p>

                            </Grid>
                           

                            <Grid item lg={3} md={6} xs={12} sm={12}>
                            <img className="img49" src={img}/>
                            <p className="p">Risk Compliance</p>

                            </Grid>
                           
                        </Grid>
                    
                </Grid>

               

                <Grid item lg={9} style={{backgroundColor:" "}}>
              
              <h1 style={{fontSize: "25px", marginBottom: "10px", marginTop: "10px" }} className="our">Why Us?</h1>
                  
                      
                      <Grid container spacing={4} style={{marginLeft:"15%"}}>
                      
                          <Grid item lg={8} md={12} xs={6} sm={6}>
                          <img className="img59" src={img1}/>
                          </Grid>


                          <Grid item lg={4} md={12} xs={12} sm={12}  style={{backgroundColor:""}}>
                         <ul className="whyus" style={{fontSize:"20px",marginTop:"15px"}}>
                             <p><BiCheck/>Trusted by All Customers</p>
                             <p><BiCheck/>Ethical in Everything We Do</p>
                             <p><BiCheck/>Years of Subject Matter Expertise</p>
                             <p><BiCheck/>Wide Range of Skills and Experience</p>
                             {/* <li>Trusted Partners With Associate Companies</li> */}
                         </ul>

                          </Grid>

                        
                    </Grid>
                  
              </Grid>

              <Grid item lg={9} style={{width:"100%"}}>
              
                <h1 style={{fontSize: "25px", marginBottom: "10px", marginTop: "10px" }} className="our">Our Team</h1>
                
                    
                        
                        <Grid container spacing={4} style={{marginLeft:"15%"}}>
                        
                            <Grid item lg={3} md={6} xs={12} sm={12}>
                            <img className="img49" src={img49}/>
                            <p className="p">Ankit Bhadouria</p>
                            </Grid>


                            <Grid item lg={3} md={6} xs={12} sm={12}>
                            <img className="img49" src={img49}/>
                            <p className="p">Govind S. Bedi</p>

                            </Grid>

                            <Grid item lg={3} md={6} xs={12} sm={12}>
                            <img className="img49" src={img49}/>
                            <p className="p">Raj Rupam</p>

                            </Grid>
                        
                           
                        </Grid>
                    
                </Grid>

            </Grid>
            <div style={{marginTop:"150px"}}>
    <p></p>

</div>
        </>


            
        
    )
}

export default AboutUs
