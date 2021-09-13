import React, {useEffect} from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import '../../common/Pricing/Pricing.css'
import { Grid } from "@material-ui/core";
import { IconContext } from 'react-icons/lib';
import Cards from './cards';
import '../../pages/Services/Services.css';
import {Data, Header,Paragraph} from './Data'

function Card(props) {
  useEffect(()=>{
    Aos.init({duration: 2000});

  }, []);

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div id="service" className="pricing__section">
        <div className='pricing__wrapper'>
          <Grid item lg={12} container  className="our_service_header" >
            <h1>{Header}</h1>
          </Grid>
          <Grid item lg={12} container className="our_service_header" >
            <p>{Paragraph}</p>
          </Grid>
          <div style={{width:"75%", margin:"auto"}}>
            <Grid   item lg={12} container  spacing={3}>
              {
                Data?.map(ele=>
                  <Grid data-aos="flip-right" item lg={4} md={4} sm={4} xs={12} className="card_outer" >
                    <Cards   data={ele}/>
                </Grid>
                )
              }
            </Grid>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Card;
