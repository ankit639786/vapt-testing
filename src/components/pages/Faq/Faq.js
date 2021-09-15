import React, { useState } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMoreOutlined } from "@material-ui/icons";
import '../HomePage/Home.css';
import Data from './data';
import  './Faq.css';


const Faq = () => {
    const [current, setCurrent] = useState(-1);

    const changeState = (panel) => (e, newValue) => {
        setCurrent(newValue ? panel : -1);
    }
    return (
        <>
            <div className="faq__section" id="faq" >

                <h1 className="faq" style={{ textAlign: "center", padding: "30px 0 0px 0" }}>Frequently Asked Questions</h1>
                <div style={{display:"grid", placeItems:"center"}}>

                {
                    Data?.map(faq =>
                        <div id="accordion">
                            <Accordion expanded={current === faq.id} onChange={changeState(faq.id)}>
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    <Typography varient="p" >
                                        <h4 style={{ color: "black" }}> <b>{faq.title}</b></h4>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography varient="p">
                                        <hr /><br />{faq.info}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                }
                </div>
            </div>
        </>
    )
}
export default Faq;