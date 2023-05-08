import React, { useEffect, useState } from "react";
import './marg.css'

const Achievement =() =>{
    const images=[
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101771463394078740/nasa-can-stop-looking-for-black-holes-says-stephen-hawking-2.png',
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101773018927202415/lE1BB9Bn20BrawnAbility.png',
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101781583050059867/John-Hockenberry-We-are-all-designers.png',
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101783392783171594/marlee-matlin.png',
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101790548114812968/Best-Stevie-Wonder-Songs-Of-All-Time.png'
    
    
    ];
    const Header=[
            'Stephen Hawking',
            'Ralph Braun',
            'John Hockenberry',
            'Marlee Matlin',
            'Stevie Wonder',
    ];
    const para=[
        'Stephen Hawking worked on the physics of black holes. He proposed that black holes would emit subatomic particles until they eventually exploded. He also wrote best-selling books, the most famous of which was A Brief History of Time: From the Big Bang to Black Holes (1988).',
        'The late founder of the Braun Corporation – one of the leading manufacturers of wheelchair accessible vehicles – and named “a champion of change” by President Barack Obama, Ralph Braun was a man who thrived on bringing the freedom of mobility to people living with disabilities.',
        'An American journalist and author, four-time Emmy Award winner, and three-time Peabody Award winner, John Hockenberry is one of the most successful journalists in history.',
        'Marlee is an Academy Award winning actress, known for her leading role in Children of a Lesser God (1986). Deaf since the age of 18 months due to a genetically malformed cochlea, Matlin also received a Golden Globe Award for her role in Children of a Lesser God',       
        'Legendary musician, singer-songwriter Stevie Wonder was born blind, due to being six weeks premature and the blood vessels at the back of his eyes not having yet reached maturation.',
    
    
    
    
    ];

const [currIndex , setCurrIndex] = useState(0);
const handleChange =()=>{
    setCurrIndex(currIndex==images.length-1 ? 0:currIndex+1);
}
const preChange =()=>{
    setCurrIndex(currIndex==0 ? images.length-1:currIndex-1);
}
useEffect(()=>{
    const timer = setTimeout(()=>{
        setCurrIndex(currIndex==images.length-1 ? 0:currIndex+1);
    }, 10000);

    return () => clearTimeout(timer);
},[currIndex]);

return (
<div className='middleMan'>
    <img  className="chaoticImages" src={images[currIndex]} alt='slides'/> 
    <br/>
    <button onClick={preChange} className="button">Previous</button>
    <button onClick={handleChange} className="button">Next</button>
    <h2 style={{color:"red"}}>{Header[currIndex]}</h2>
    <h4 style={{color:"blue"}} className="thirty">{para[currIndex]} </h4>

    
</div>);

};
export default Achievement;