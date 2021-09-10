import React from 'react';

import Home from '../components/pages/HomePage/Home';
import Services from '../components/pages/Services/Services';
import About from '../components/pages/About/About';
import { Switch, Route } from 'react-router-dom';
import Contact from '../components/pages/Contact/Contact';
import Vapt from "../components/pages/vapt/Vapt";
import Faq from "../components/pages/Faq/Faq";

const Routes = () => {
    return (
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/aboutus' component={About} />
          <Route path='/contactus' component={Contact} />
          <Route path='/vapt' component={Vapt} />
          <Route path='/faq' component={Faq} />
        </Switch>
    );
  }
  
  export default Routes;