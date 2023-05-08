import { useEffect } from "react";
import { useState } from "react";
import "./marg.css"
const Home =()=>{

    const images=[
        'https://cdn.discordapp.com/attachments/1037621991630458931/1037622380534714409/home2.jpg',
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101750895512911922/image.png',
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101752877459968030/e0043ba03eb3d6691a7725d99fcb076b.png',
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101752241691562045/25384f1d997e27a3f8ef5ba67dbd37ce.png',
        'https://cdn.discordapp.com/attachments/1037621991630458931/1101752144287252571/3c2f37e121ccc5b32f976df5a841366d.png'
    ];

const [currIndex , setCurrIndex] = useState(0);

useEffect(()=>{
    const timer = setTimeout(()=>{
        setCurrIndex(currIndex==images.length-1 ? 0:currIndex+1);
    }, 4000);

    return () => clearTimeout(timer);
},[currIndex]);

return (
<center className="marg">
    <img  className="homeImages" src={images[currIndex]} alt='slides'/> 
    <marquee behavior="alternate" direction="right"><p style={{color: "blue"}}>Vikass Conveyance Allowance Subsidiary bus passes Assistance for purchase of aids and appliances Reimbursement of tuition fee to Pre-Matric and Post Matric students  Exemption in Professional Tax/Road Tax  Bus Concession Disability Pension Free Tape Recorder Chhattisgarh Pension Yojana Hostel facilities Separate Institution for Partially Deaf Children Residentail Schools Training Centres for Teachers of Visually Handicapped Relaxation of age for admission in I.T.I’s Disability Pension Scheme State Disability Pension HP Viklang Pension Yojana State Disability Pension Indira Gandhi National Disability Pension Scheme (IGNDPS) Senior Citizen Scheme for Persons with Disabilities  Karnataka Social Security Scheme for Persons with disabilities Karnataka Rehabilitation Scheme for Persons with Disabilities Karnataka Kerala Swasraya Scheme Scheme of Issuing Disability Certificate Kerala Government Nishaktjano hetu Vivah Yojana Madhya Pradesh Chief Minister Shivraj Singh Chouhan State Disability Pension State Social Security Pension Physically Handicapped (Viklang) Pension Scheme Handicap Pension Scheme Assistance Amount to Beneficiaries of Disabled Pension Scheme</p></marquee>
    <marquee behavior="alternate" direction="left"><p style={{color: "blue"}}>Vikass Conveyance Allowance Subsidiary bus passes Assistance for purchase of aids and appliances Reimbursement of tuition fee to Pre-Matric and Post Matric students Exemption in Professional Tax/Road Tax  Bus Concession Disability Pension Free Tape Recorder Chhattisgarh Pension Yojana Hostel facilities Separate Institution for Partially Deaf Children Residentail Schools Training Centres for Teachers of Visually Handicapped Relaxation of age for admission in I.T.I’s Disability Pension Scheme State Disability Pension HP Viklang Pension Yojana State Disability Pension Indira Gandhi National Disability Pension Scheme (IGNDPS) Senior Citizen Scheme for Persons with Disabilities Karnataka Social Security Scheme for Persons with disabilities Karnataka Rehabilitation Scheme for Persons with Disabilities Karnataka Kerala Swasraya Scheme Scheme of Issuing Disability Certificate Kerala Government Nishaktjano hetu Vivah Yojana Madhya Pradesh Chief Minister Shivraj Singh Chouhan State Disability Pension State Social Security Pension Physically Handicapped (Viklang) Pension Scheme Handicap Pension Scheme Assistance Amount to Beneficiaries of Disabled Pension Scheme</p></marquee>
</center>);
};
export default Home;