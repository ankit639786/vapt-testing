import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Contact from './components/pages/Contact/Contact';
import Vapt from "./components/pages/vapt/Vapt";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/aboutus' component={Products} />
        <Route path='/contactus' component={Contact} />
        <Route path='/vapt' component={Vapt} />

        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
