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
      <div>
        <div className='pricing__wrapper'>
          <Grid item lg={12} container style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px", textShadow: "2px 2px lightgray", color: "#09091F", fontSize: "14px" }}>
            <h1 style={{ textAlign: "center", width: "100%" }}>We offer a wide range of services</h1>
          </Grid>
          <Grid item lg={12} container style={{ margin: "auto", textAlign: "center" }} >
            <Grid item lg={4} >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service22} alt="" />
              <h1 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}>Network</h1>
              <h2 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}> Security Audit</h2>
            </Grid>
            <Grid item lg={4} >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service33} alt="" />
              <h1 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}>Web Application</h1>
              <h2 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}> Penetration Testing</h2>
            </Grid>
            <Grid item lg={4}  >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service44} alt="" />
              <h1 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}>Mobile</h1>
              <h2 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}> Penetration Testing</h2>
            </Grid>
            {/* <Grid item lg={1}>
            </Grid> */}
          </Grid>
          <Grid item lg={12} container style={{ marginTop: "40px",textAlign: "center" }} >

            <Grid item lg={4}  >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service55} alt="" />
              <h1 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}>Wireless</h1>
              <h2 style={{ color: "#09091F", textShadow: "2px 2px lightgray", marginBottom: "40px" }}> Security Assessmen9</h2>
            </Grid>
            <Grid item lg={4} >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service77} alt="" />
              <h1 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}>Cloud</h1>
              <h2 style={{ color: "#09091F", textShadow: "2px 2px lightgray", marginBottom: "40px" }}> Security Assessmen9</h2>
            </Grid>
            <Grid item lg={4}  >
              <img style={{ width: "90%", marginBottom: "20px" }} src={service88} alt="" />
              <h1 style={{ color: "#09091F", textShadow: "2px 2px lightgray" }}>Social </h1>
              <h2 style={{ color: "#09091F", textShadow: "2px 2px lightgray", marginBottom: "40px" }}> Assessment</h2>
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
