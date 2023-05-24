import React from 'react'
import Box from "@mui/material/Box";
// import { GrGallery } from 'react-icons/gr';

export default function TweetPopup() {
  return (
    <div>
        {/* <GrGallery/> */}
      <Box sx={{
          paddingRight: "80px",
          paddingLeft: "30px",
           width: 600,
          height: 347,
          backgroundColor: "white",
          borderRadius: 5,
          borderColor: "black",
        }}>
           <h2 style={{color:'black', textAlign:'left'}}>X</h2>

        </Box>
    </div>
  )
}
