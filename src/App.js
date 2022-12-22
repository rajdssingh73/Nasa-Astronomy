import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Spot from './Components/Spot';
import ScrollData from './Components/ScrollData';


const MyContext = React.createContext();

function App() {
  const obj = {};

 


  return (
    <MyContext.Provider value={obj}>
      <div>
        <Navbar />
        <Spot />
        <ScrollData/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
