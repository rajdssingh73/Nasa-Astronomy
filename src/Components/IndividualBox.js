import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pop from './Pop';


const IndividualBox = ({spot}) => {

  const [clickedImage, setClickedImage] = useState(false);

    function handleImageClick(spot){
        setClickedImage(true);
    }

  return (
    <Card sx={{ maxWidth: 345, margin:2}}>
     {spot.media_type === "image" &&  <CardMedia
        sx={{ height: 260 }}
        image={spot.url}
        onClick={handleImageClick}
      />}
      {spot.media_type ==="video" && 
     <iframe  height="260" src={spot.url+"?controls=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
     }
      <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                   {spot.title.substring(0, 25)}
            </Typography>

            <Typography variant="body2" color="text.secondary" center>
                     Author: {spot.copyright} 
            </Typography>

            <Typography variant="body2" color="text.secondary" center>
                     Date: {spot.date}
            </Typography>
            
            {clickedImage && <Pop img={spot} clickedImage = {clickedImage} setClickedImage={setClickedImage} />}
      </CardContent>
     
    </Card>
  )
}

export default IndividualBox