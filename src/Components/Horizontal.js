import React, { useEffect, useState } from 'react';
import IndividualBox from './IndividualBox';
import Loader from './Loader';
const Horizontal = ({mainSpot}) => {
  return (
    <div style={{backgroundColor:"", marginTop:"1%"  }}>
        {mainSpot? (
            <div className="horizontal" style={{display: "flex",whiteSpace: "nowrap", overflowX:"scroll", overflowY:'none'}} >
            {mainSpot?.map((spot, index) => (
                <div key={index} style={{height:400, minWidth:400}}>
                       <IndividualBox spot = {spot} />
                </div>
            ))}
            </div>
        ): <div style={{ display: "flex",  alignItems: "center", 
            justifyContent: "center"}}><Loader/></div>}
        </div>
  )
}

export default Horizontal