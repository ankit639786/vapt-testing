import React, { useState } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
            <div className="faq__section" id="faq">
                <h1 className="faq" style={{ textAlign: "center", padding: "30px 0 0px 0" }}>Frequently Asked Questions</h1>
                {
                    Data?.map(faq =>
                        <div style={{ margin: 40,fontSize:"8px" }}>
                            <Accordion expanded={current === faq.id} onChange={changeState(faq.id)}>
                                <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                                    {/* <Typography varient="" > */}
                                        <h1 style={{ color: "black" }}> {faq.title}</h1>
                                    {/* </Typography> */}
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

                {/* <div style={{ marginBottom: 10, marginRight: 40, marginLeft: 40 }}>
                    <Accordion expanded={current === 1} onChange={changeState(1)}>
                        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                            <Typography>
                                <h1 style={{ color:"black" }}>  What is Penetration Testing (PT or PenTest)? </h1>
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography varient="p">
                                A Penetration Test is an in-depth expert-driven activity focused on identifying various possible routes an attacker could use to break into the network.  In-addition with the vulnerabilities it also identifies the potential damage and further internal compromise an attacker could carry out once they are past the perimeter.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div> */}
            </div>
        </>



    )
}
export default Faq;