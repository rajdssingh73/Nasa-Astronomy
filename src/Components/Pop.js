import React from 'react'
import Dialog from '@mui/material/Dialog';

const Pop = ({img, setClickedImage, clickedImage}) => {
    console.log(img?.url, )
    
    const handleClose = () => {
   
      setClickedImage(false)
    };

  return (
   <div>
     
      <Dialog 
        open={clickedImage}
        onClose={handleClose}
      >
        <img src={img?.url} style={{border: "5px solid red"}} alt="" />
        {/* <DialogActions >
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  )
}

export default Pop