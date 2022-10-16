import { redirect } from "react-router-dom";

const Home =()=>{
return (
<>
<br/><br/><br/>
<div style ={{
    color: "#292b2c"
    
}}>

    <div>
        {/*this is image compnent which will cover 80% */}
        <img
          src="images/Home1.jpg"
          alt="Tammy Stevens"
          style={{
            width:"120rem",
            height:"60rem",
            objectFit: "cover",
            marginBottom: "0"
          }}
        />


    </div>
         {/*this is text compnent which will cover 80% */}  

    <h1> The sky is limit </h1>
</div>


</>);
};
export default Home;