
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Achievement from "./components/pages/Achievement";
import Awards from "./components/pages/Awards";
import Contactus from "./components/pages/Contactus";
import SchemeCat from "./components/pages/schemecat";
import Home from "./components/pages/Home";
import Latest from "./components/pages/Latest";
import "./App.css";


const App =() => {
  return (
  
  <> 
  <Router>


      <Navbar />
      <div className="hundred">
      <div className="hundredpage">
      <Routes>
          
          <Route path="/Awards" element={<Awards/>} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/Achievement" element={<Achievement/>} />
          <Route path="/Schemecat" element={<SchemeCat/>} />
          <Route path="/Latest" element={<Latest/>} />
          <Route path="Contactus" element={<Contactus/>} />
          <Route path="/" element={<Home/>} />

      </Routes>
      </div>

      <div className="abt">
      <About /></div>
      </div>



          
  </Router>
  </>
  
  );

};
export default App;