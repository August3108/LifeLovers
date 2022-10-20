import React from "react";
import "./marg.css";
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare}from "react-icons/fa";
const Contactus =() =>{
    return (
        <>
        <div className="marg">
        <h3> We the Team at life-lovers aim to make the mental health & reach of differently-abled people better.
             our motto is to spread awareness about differently-abled people, their rights, and govt schemes to everyone.
             we hope everyone gets to know that there is nothing which can stop them and they can strive to be whatever 
             they want to be.You can support our work by treating people with kindness, compassion and love <br/> <br/><br/>
             You can contact us on <br/>

Mail               :  lifelovers341@gmail.com <br/>
FB page        :        <a href="https://www.facebook.com"> <FaFacebookSquare className="facebook" /></a><br/>
instagram    :          <a href="https://www.instagram.com"><FaInstagramSquare className="instagram" /></a><br/>
youtube       :         <a href="https://www.youtube.com"><FaYoutubeSquare className="youtube" /></a> <br/>
</h3>
</div>
        </>
        
    );

};
export default Contactus;