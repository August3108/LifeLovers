import './pages.css'
import shData from './scheme-data';
import React, { Component } from 'react'

function MapDemo() {
    return (
        <>
            {shData.map(e => {
                return (
                    <>
                        <h1 className='bwHeading'>{e.schTitle}</h1><br/>
                        <p>This scheme is available in {e.schArea}</p>
                        <p>{e.schContent}</p><br/><br/>
                    </>
                );

            })}
        </>
    )
}
export default MapDemo;