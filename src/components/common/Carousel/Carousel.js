import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item'
import img from "../../assests/images/service22.jpg";
// import {Card} from "@material-ui/core";
import Cards from './cards';
import { Grid } from "@material-ui/core";
import { Data } from './Data';
import "./Carousel.css";

const Carouse = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ]

    return (
        <>
        <div id="vapt_process">
            <h1 className="car">End-to-End Vulnerability Assessment Process</h1>

            <h2 className="car1">We follow a step-by-step VAPT test to identify and analyze system vulnerabilities.</h2>
            
            <Carousel breakPoints={breakPoints} swipeable={true} style={{ marginTop: "20px", paddingTop: "35px" }}>
                {
                    Data?.map(ele =>
                        <Grid item lg={4} md={4} sm={4} xs={12} className="card_outer" >
                            <Cards data={ele} />
                        </Grid>
                    )
                }
            </Carousel>
            </div>
        </>
    )
}

export default Carouse;