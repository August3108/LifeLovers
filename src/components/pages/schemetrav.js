import './pages.css'
import shData from './scheme-data';
import React, { Component } from 'react'
function MapDemo() {
    return (
        <>
            {shData.map(e => {
                return (
                    <>
                        <h1>{e.schTitle}</h1>
                        <p>{e.schArea}</p>
                        <p>{e.schContent}</p>
                    </>
                );

            })}
        </>
    )
}
export default MapDemo;