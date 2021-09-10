import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import Routes from './Routes/Routes'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
