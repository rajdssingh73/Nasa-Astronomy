import NASA from '../nasa-logo.png'
import React from 'react'

const Navbar = () => {
  return (
      <div style={{borderBottom: "4px solid blue", backgroundImage: "linear-gradient(to right, yellow , red)"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0vh",
            padding: "0.5%"
          }}
        >
          <div style={{ marginLeft: "2vw" }}>
             <img src={NASA} style={{width:"28vh"}} />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around"
            }}
          >
            <h1 style={{color:'white', marginRight:'5vh', marginTop:'4vh', fontSize:'5vh'}}>Astronomy picture of the day</h1>
          </div>
       </div>
    </div>
  )
}

export default Navbar