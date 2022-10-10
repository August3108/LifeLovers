
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Achievement from "./components/pages/Achievement";
import Test from "./test";
import Awards from "./components/pages/Awards";
import Contactus from "./components/pages/Contactus";
import SchemeCat from "./components/pages/scheme_cat";
import Home from "./components/pages/Home";
import "./App.css";

const App =() => {
  return (
  
  <> 
  <Router>


        <Navbar />

      
      <div className="hundred">
      <div className="hundredpage">
      home home home home home home home home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home home
      home home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home home
      home home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home home
      home home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home home
      home home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home homehome home home home
      
      
      </div>

      <div className="abt">
      <About /></div>
      </div>

        <Routes>
          
          <Route path="/Awards" element={<Awards/>} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/Achievement" element={<Achievement/>} />
          <Route path="/SchemeCat" element={<SchemeCat/>} />
          <Route path="/" element={<Home/>} />

        </Routes>

          
  </Router>
  </>
  
  );

};
export default App;