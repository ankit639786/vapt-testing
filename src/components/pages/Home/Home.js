import React from "react";
import { Grid, Paper } from "@material-ui/core";
import hacker from "../../../assests/images/hacker.png";
//import apple from "../../../images/apple.png";
//import android from "../../../images/android.png";
import image11 from "../../../assests/images/image11.jpg";
import service22 from "../../../assests/images/service22.jpg";
import service33 from "../../../assests/images/service33.jpg";
import service44 from "../../../assests/images/service44.jpg";
import service55 from "../../../assests/images/service55.jpg";
import service77 from "../../../assests/images/service77.jpg";
import service88 from "../../../assests/images/service88.jpg";


const Home = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${image11})`,
                height: "80vh",
                //width:"100%",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                
            }}>
            <h1 style={{textAlign:"center", color:"#ffffff", paddingTop:"180px", fontSize:"40px", textShadow:"4px 4px #0a1a2e"}}>Vulnerability Assessment & <br /> &nbsp;&nbsp;&nbsp;  Penetration Testing (VAPT)</h1>


            </div>


            <Grid item lg={12} container spacing={4} style={{ marginTop: "40px", color: "#ce2029", fontSize: "18px" }}>
                <Grid item lg={4} sm={6} xs={12} md={4}>
                </Grid>

                <Grid item lg={5} sm={6}  xs={12} md={4}>
                    <h1>We Offer a Wide Range of Services</h1>
                </Grid>

                <Grid item lg={3} sm={6}  xs={12} md={12}>
                </Grid>
            </Grid>



            <br />



            <Grid item lg={12} container spacing={4} style={{marginRight:"0px",}} >
            <Grid item lg={1}>
            </Grid>

           

                <Grid item lg={3} style={{marginLeft:"80px",}}>
                    <img style={{width:"300px"}}
                        src={service22}
                        alt="" />
                        <h1 style={{textAlign:"center", color:"#ce2029"}}>Network</h1>
                        <h2 style={{textAlign:"center", color:"#0f4c8c"}}> Security Audit</h2>
                </Grid>


               
                <Grid item lg={3}>
                    <img  style={{width:"300px"}}
                        src={service33}
                        alt="" />
                        <h1 style={{textAlign:"center", color:"#ce2029"}}>Web Application</h1>
                        <h2 style={{textAlign:"center", color:"#0f4c8c"}}> Penetration Testing</h2>
                </Grid>

                   
            
                <Grid item lg={3}>
                    <img  style={{width:"300px"}}
                        src={service44}
                        alt="" />
                        <h1 style={{textAlign:"center", color:"#ce2029"}}>Mobile Application</h1>
                        <h2 style={{textAlign:"center", color:"#0f4c8c"}}> Penetration Testing</h2>
                </Grid>

                <Grid item lg={1}>
            </Grid>



            </Grid>


            
            <Grid item lg={12} container spacing={4} style={{marginTop:"20px",}} >
            <Grid item lg={1}>
            </Grid>

           

                <Grid item lg={3} style={{marginLeft:"80px",}}>
                    <img style={{width:"300px"}}
                        src={service55}
                        alt="" />
                        <h1 style={{textAlign:"center", color:"#ce2029"}}>Wireless</h1>
                        <h2 style={{textAlign:"center", color:"#0f4c8c"}}> Security Assessment</h2>
                </Grid>


               
                <Grid item lg={3}>
                    <img  style={{width:"300px"}}
                        src={service77}
                        alt="" />
                        <h1 style={{textAlign:"center", color:"#ce2029"}}>Cloud</h1>
                        <h2 style={{textAlign:"center", color:"#0f4c8c"}}> Security Assessment</h2>
                </Grid>

                   
            
                <Grid item lg={3}>
                    <img  style={{width:"300px"}}
                        src={service88}
                        alt="" />
                        <h1 style={{textAlign:"center", color:"#ce2029"}}>Social Engineering</h1>
                        <h2 style={{textAlign:"center", color:"#0f4c8c"}}> Assessment</h2>
                </Grid>

                <Grid item lg={1}>
            </Grid>



            </Grid>




            <br />



            <Grid item lg={12} container spacing={4}>
                <Grid item lg={1}>
                </Grid>
                <Grid item lg={3}>
                    <h1 style={{ color: "#0f4c8c", fontSize: "36px", marginBottom: "9px", marginTop: "10px" }}>Web Application</h1>
                    <p style={{ fontSize: "20px" }}>Web Application Penetration testing helps enterprises to simulate real world hackers' attacks to gain access to critical information. The compound or hybrid approach utilizes manual and automated scans to diminish the quantity of false positives and recognize the vulnerabilities in the resource such as web application, mobile application, cloud infrastructure, and servers.</p>
                    <img style={{ width: "300px", }}
                        src={hacker}
                        alt="" />
                </Grid>

                <Grid item lg={8}>
                    <Paper style={{ height: "520px", width: "800px" }}>




                        <h1 style={{ color: "#0f4c8c", fontSize: "33px", marginLeft: "35px", marginRight: "20px", marginBottom: "20px", marginTop: "20px" }}>OWASP Top 10 Application Penetration Test Cases</h1>
                        <Grid container spacing={4}>
                            <Grid item lg={1}>
                            </Grid>
                            <Grid item lg={5}>
                                <li style={{ marginBottom: "12px" }}>Code Injection</li>
                                <li style={{ marginBottom: "12px" }}> Beyond XSS with Business Logic Errors </li>
                                <li style={{ marginBottom: "12px" }}>Remote Code Execution</li>
                                <li style={{ marginBottom: "12px" }}>SQL Injection</li>
                                <li style={{ marginBottom: "12px" }}>XML External Entities (XXE) Injection</li>
                                <li style={{ marginBottom: "12px" }}>Privilege Escalation, SSRF, and IDOR</li>
                                <li style={{ marginBottom: "12px" }}>Race condition Vulnerability</li>
                                <li style={{ marginBottom: "12px" }}>Session Management vulnerabilities</li>
                                <li style={{ marginBottom: "12px" }}>Cross-Site Request Forgery (CSRF)</li>
                                <li style={{ marginBottom: "12px" }}>Java, .NET Deserialization vulnerability</li>
                                <li style={{ marginBottom: "12px" }}>Injection Attacks</li>
                                <li style={{ marginBottom: "12px" }}>Broken Authentication</li>
                            </Grid>


                            <Grid item lg={6}>
                                <li style={{ marginBottom: "12px" }}>Broken Access control</li>
                                <li style={{ marginBottom: "12px" }}> Security misconfigurations </li>
                                <li style={{ marginBottom: "12px" }}> Unvalidated Redirects and Forwards</li>
                                <li style={{ marginBottom: "12px" }}> Sensitive Data Exposure</li>
                                <li style={{ marginBottom: "12px" }}> Application Access Control Issues</li>
                                <li style={{ marginBottom: "12px" }}> API vulnerabilities </li>
                                <li style={{ marginBottom: "12px" }}>Error handling/ information leakage</li>
                                <li style={{ marginBottom: "12px" }}>Exfiltration of sensitive data from memory</li>
                                <li style={{ marginBottom: "12px" }}> Cross Site Scripting (XSS)</li>
                                <li style={{ marginBottom: "12px" }}> Insecure Deserialization</li>
                                <li style={{ marginBottom: "12px" }}>Using Components with known vulnerabilities</li>
                                <li style={{ marginBottom: "12px" }}>Insufficient logging and monitoring</li>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>

            </Grid>





        </>
    )
}
export default Home;