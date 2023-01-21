import './pages.css'
import shData from './scheme-data';
import React,{Component } from 'react'
    function MapDemo(){
        const map1 = shData.map(item => item.schTitle)
        const map2 = shData.map(item => item.schArea)
        const map3 = shData.map(item => item.schContent)
        
        return(
            <>
            <h2 className='scheme-heading'>{map1}</h2><br/>
            <h2 className='scheme-heading'>{map2}</h2><br/>
            <p>{map3}</p>
            
            </>
        )
    }
export default MapDemo;