import React, { useEffect, useState, useRef} from 'react';
import Horizontal from './Horizontal';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";



const ScrollData = () => {


    const [data, setData] = useState([]);
    const [currentDate, setCurrentDate] = useState(0);

    const style = {
        height: 280,
        border: "1px solid green",
        margin: 6,
        padding: 8
      };

    useEffect(() => {
        getData();
     }, []);
       
    
      async function getData() {
       
        if(currentDate == 0){
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1; 
            const day = today.getDate()-1;
            var date = `${year}-${month}-${day}`;
            var xDate = subtract14Days(date)
           }else{
            var date = currentDate;
            var xDate = subtract14Days(date)
           }
            const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=gaff4Pwpu0Qg6woyFty1YhVRxhj4In1ImvOCyFD7&start_date=${xDate}&end_date=${date}&thumbs=true`
            );
            const json = await response.json();
            setCurrentDate(xDate)
            divideData(json)
    }

    function divideData(json){
        const chunkSize = 7;
        const chunks = [];
        for (let i = 0; i < json.length; i += chunkSize) 
        {
            chunks.push(json.slice(i, i + chunkSize));
        }
        chunks.reverse();
        var arr = [...data, ...chunks]
        setData(arr);  
    }

    function subtract14Days(date) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() - 13);
        const dates = new Date(newDate);
        const formattedDate = dates.toISOString().substring(0, 10);
        return formattedDate;
    }



  return (
    <div>
        <InfiniteScroll
          dataLength={data?.length}
          next={getData} 
          hasMore={true}
          loader={<div style={{ display: "flex",  alignItems: "center", 
          justifyContent: "center"}}><Loader/></div>}
        >
          {data?.map((mainSpot, index) => (
                    <div key={index} style={{style}}>
                        <Horizontal mainSpot = {mainSpot} />
                    </div>
                ))}
        </InfiniteScroll>
    </div>
  )
}

export default ScrollData