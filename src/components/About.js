import "./about.css"
import{FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare} from "react-icons/fa"
import { Link } from "react-router-dom";
const About= ()=> {
return (
<>

<div className="about-main">
<Link to="/">.
            <img className="button1" src="https://cdn.discordapp.com/attachments/967279927932108900/1028898156412411934/imgonline-com-ua-resize-jJNbZpVun1l.jpg">
                </img>
        </Link>
        <br/>
    <div class="float-container">
        <div class="float-child">


        
            

            <h1 className="">Has this been helpful to you?</h1>  <br/>
            <p> You can support our work by sharing this article with others </p>  
        </div>

    <div class="float-child 2">
    contact us on 
    <br/>
        <ul className="contact">

        {/*address details*/}
        <li><div>
                <h1>Address</h1>
                <div className="details">
                        
                       1st floor Jugu tower <br/>
                       bhata para, Durg<br/>chhattishgarh 
                    </div>
                
            
            </div></li>
        {/*contact details*/}
        <li><div>
                    <h1>contact details</h1>
                    <div className="details">
                        
                        email: abxyz@gmail.com
                        <br/>phone: 9998887776661
                    </div>
        </div></li>

        {/*social media details*/}
        <li><div>
            <h1>social media</h1>
            <div className="details">
                <a href="https://www.facebook.com"> <FaFacebookSquare className="facebook" /> Facebook</a><br/>
                <a href="https://www.instagram.com"><FaInstagramSquare className="instagram" /> instagram</a><br/>
                <a href="https://www.youtube.com"><FaYoutubeSquare className="youtube" /> YouTube</a><br/>    
            </div>
        </div></li>
          </ul>
    </div>

</div>



</div>
</>
);
}
export default About;