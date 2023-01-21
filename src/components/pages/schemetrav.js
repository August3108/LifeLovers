import './pages.css'
import shData from './scheme-data';
import React,{Component } from 'react'
    function MapDemo(){
        const map1 = shData.map(item => item.schTitle)
        const map2 = shData.map(item => item.schArea)
        const map3 = shData.map(item => item.schContent)
        
        
        return(
            <>
            {shData.data.map((e, count) => {
                <h1> {e.schTitle}</h1>
            }
            )};

            
            
            </>
        )
    }
export default MapDemo;