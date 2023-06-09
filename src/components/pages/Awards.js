import React, { useState } from "react";
import shData from './scheme-data';
import "./marg.css"

const Awards = () => {
  const [query , setQuery] = useState("Search Scheme");

  function MapDemo() {
    const filteredData = shData.filter(e => 
      e.schTitle && e.schTitle.toLowerCase().includes(query.toLowerCase()) ||
      e.schArea && e.schArea.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredData.length > 0) {
      return (
        <>
        
        <h3><br/>The following scheme match with your search..</h3>
          {filteredData.map(e => (
            <>
              <h1 className='bwHeading'>{e.schTitle}</h1>
              <p>This scheme is available in {e.schArea}</p>
              <p>{e.schContent}</p><br/><br/>
            </>
          ))}
        </>
      )
    } else {
      return (
        
        <h3><br/>No schemes found for the entered query. Please try a different search.</h3>
      )
    }
  }

  return (
    <div className="marg">
      <h1 style={{color:"red"}}>Search Scheme or Enter Area Name...</h1>
    <input
  type="text"
  placeholder="Search Scheme..."
  style={{
    width: "50vh",
    borderColor: "grey",
    borderRadius: "5px",
    padding: "10px",
    outline: "none",
  }}
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>      
      
      
      <MapDemo/>
    </div>
  );

};

export default Awards;
