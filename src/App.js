import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import AboutUs from './components/pages/AboutUs/AboutUs';
import ContactUs from './components/pages/ContactUs/ContactUs';
import OurServices from './components/pages/Services/OurServices';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/aboutus' exact component={AboutUs} />
        <Route path='/contactus' exact component={ContactUs} />
        <Route path='/services' exact component={OurServices} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

