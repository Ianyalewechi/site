import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import "./App.css";
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contacts from './components/pages/Contacts';
import CorporateService from './components/pages/CorporateService';
import ItConsulting from './components/pages/ItConsulting';
import IndividualService from './components/pages/IndividualService';





function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/corporate-service' element={<CorporateService/>} />
            <Route path='/individual-service' element={<IndividualService/>} />
            <Route path='/it-consulting' element={<ItConsulting/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

{/* /* <Route path='/our-services' exact  element={<OurServices/>} />
            <Route path='/products' exact  element={<Products/>} />
            <Route path='/about-us' exact element={AboutUs} />
            <Route path='/sign-up' exact element={SignUp} /> */} 