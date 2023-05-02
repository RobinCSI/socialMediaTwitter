import React from 'react'
import { Button } from '@mui/material'
import Icons from '../smallComponents/Icons'
import {BiSearch} from "react-icons/bi"
function Search() {
  return (
    <div>
      <Button 
       sx={{
        textTransform: "none",
        width: 300,
        height: 40,
        border: "1px solid #dadce0",
        backgroundColor: "white",
        borderRadius: "50px",
        color: "black",
        fontFamily: "Google Sans arial,sans-serif",
        fontSize: 14,
        letterSpacing: 0.25,
       display:"flex",
       justifyContent:"space-between",

        "&:hover": {
          backgroundColor: "initial",
          color: "initial",
          border: "1px solid #dadce0",
        },}}
      variant="outlined"><Icons icons={< BiSearch/>}/>Search here</Button>
    </div>
  )
}

export default Search
