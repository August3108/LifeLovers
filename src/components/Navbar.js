import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare}from "react-icons/fa";
import { GiHamburgerMenu ,GiHumanPyramid } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import "./dropdown.css"
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <Link to="/"className="logo">
          <h2><GiHumanPyramid/>
            <span>L</span>ife
            <span>L</span>overs
          </h2>
        </Link>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul className="nav-items">

            {navItems.map((item)=> {
              if (item.title === "Highlight") {
                return (
                  <li key={item.id} className={item.cName} 
                     onClick={() => setDropdown(!dropdown)}
                     onMouseLeave={() => setDropdown(false)}
                     >
                    <Link to={item.path}>{item.title}<MdKeyboardArrowDown/></Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }

              return (
                  <li key={item.id} className={item.cName}>
                  <Link to={item.path}> {item.title}</Link>
                  </li>     
              );
            })}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li> <a href="https://www.facebook.com"> <FaFacebookSquare className="facebook" /> </a></li>
            <li> <a href="https://www.instagram.com"><FaInstagramSquare className="instagram" /></a></li>
            <li><a href="https://www.youtube.com"><FaYoutubeSquare className="youtube" /></a></li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
<hr/>


    </>
  );
};

export default Navbar;