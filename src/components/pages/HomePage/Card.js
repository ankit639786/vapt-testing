import React from 'react';
// import { Button } from './Button';
// import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { Grid, Paper } from "@material-ui/core";
import service22 from "../../assests/images/service22.jpg";
import service33 from "../../assests/images/service33.jpg";
import service44 from "../../assests/images/service44.jpg";
import service55 from "../../assests/images/service55.jpg";
import service77 from "../../assests/images/service77.jpg";
import service88 from "../../assests/images/service88.jpg";

import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div id="service" className="pricing__section">
        <div className='pricing__wrapper'>
          <Grid item lg={12} container style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px", color: "white", fontSize: "20px" }}>
            <h1 style={{ textAlign: "center", width: "100%", margin:"50px" }}>Our Services</h1>
          </Grid>
          <Grid item lg={12} container style={{ margin: "auto", textAlign: "center" }} >
            <Grid item lg={4} md={4} sm={4} xs={12} >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service22} alt="" />
              <h1 style={{ color: "white" }}>Network</h1>
              <h2 style={{ color: "white", marginBottom: "40px" }}> Security Audit</h2>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <img style={{ width: "90%", marginBottom: "20px" }} src={service33} alt="" />
              <h1 style={{ color: "white" }}>Web Application</h1>
              <h2 style={{ color: "white", marginBottom: "40px" }}> Penetration Testing</h2>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service44} alt="" />
              <h1 style={{ color: "white" }}>Mobile</h1>
              <h2 style={{ color: "white", marginBottom: "40px" }}> Penetration Testing</h2>
            </Grid>
            {/* <Grid item lg={1}>
            </Grid> */}
          </Grid>
          <Grid item lg={12} container style={{ marginTop: "40px",textAlign: "center" }} >

            <Grid item lg={4} md={4} sm={4} xs={12} >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service55} alt="" />
              <h1 style={{ color: "white" }}>Wireless</h1>
              <h2 style={{ color: "white", marginBottom: "40px" }}> Security Assessmen9</h2>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <img style={{ width: "90%", marginBottom: "20px" }} src={service77} alt="" />
              <h1 style={{ color: "white" }}>Cloud</h1>
              <h2 style={{ color: "white", marginBottom: "40px" }}> Security Assessmen9</h2>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service88} alt="" />
              <h1 style={{ color: "white" }}>Social </h1>
              <h2 style={{ color: "white", marginBottom: "40px" }}> Assessment</h2>
            </Grid>
            {/* <Grid item lg={1}>
            </Grid> */}
          </Grid>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Card;
