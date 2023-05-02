import React from 'react'
import { Button, Box } from "@mui/material";
import UiPartLanding from './UiPartLanding';
function RightsideCard() {
  return (
    <div>
        <Box
        sx={{
          backgroundColor: "white",
          border: "2px solid lightgrey",
          width:350,
          borderRadius: 5,
          // transform: "translate(200%, 180%)",
          margin: 0,
        }}
      >
        <UiPartLanding/>
      </Box>
    </div>
  )
}

export default RightsideCard
