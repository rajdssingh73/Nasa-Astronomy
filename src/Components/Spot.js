import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import Pop from './Pop';


const Spot = () => {
   
const [data, setData] = useState(null);

    useEffect(() => {
          getData();
    }, []);

    async function getData() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; 
        const day = today.getDate();

        const date = `${year}-${month}-${day-1}`;
        const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${date}&end_date=${date}&thumbs=true`
        );
        const json = await response.json();
        setData(json);
    }
    const [clickedImage, setClickedImage] = useState(false);
    function handleImageClick(spot){
        setClickedImage(true);
        // console.log("hi")
    }

  return (
    <div>
        <div style={{backgroundColor:""}}>
            {data? (
                <div className="spotdata" >
                {data?.map((spot, index) => (
                    <div key={index} 
                     style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop:'30px',
                      }}>
                        <div style={{width:"50%", marginLeft:'4%', justifyContent:"center"}}>
                            <h1 style={{ textAlign: "center", fontSize:'6vh'}}>{spot.title}</h1>
                            <p>{spot.explanation.substring(0, 1000)}...</p>
                            {spot.copyright && <h2>Author: {spot.copyright}</h2>}
                            <h4>Date: {spot.date}</h4>
                        </div>
                       
                        <div style={{ textAlign: "center", marginTop:"30px"}}>
                            <img src={spot.url} 
                                style={{width:"60%", 
                                display: "inline-block",
                                border: "5px solid yellow"}}
                                onClick={()=>{handleImageClick(spot)}}
                                alt=""
                             />
                            {clickedImage && <Pop img={spot} clickedImage = {clickedImage} setClickedImage={setClickedImage} />}
                         </div>
                    </div>
                ))}
                </div>
            ): 
            <div style={{ display: "flex",  alignItems: "center",justifyContent: "center"}}><Loader/></div>
            }
      </div>
    </div>
  )
}

export default Spot