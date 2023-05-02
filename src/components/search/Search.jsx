import React from 'react'
import { Button } from '@mui/material'
import Icons from '../smallComponents/Icons'
import {BiSearch} from "react-icons/bi"
import style from "./Search.module.css";
function Search() {
  return (
    <div>
      <Button 
       sx={{
        textTransform: "none",
        width: 300,
        height: 40,
        border: "1px solid #dadce0",
      
        borderRadius: "50px",
        color: "black",
        fontFamily: "Google Sans arial,sans-serif",
        fontSize: 14,
        letterSpacing: 0.25,
       display:"flex",
       justifyContent:"flex-start",
       backgroundColor: "rgb(247, 249, 249)",

        "&:hover": {
          backgroundColor: "initial",
          color: "initial",
          border: "1px solid #dadce0",
        },}}
      variant="outlined"><Icons icons={< BiSearch className={style.iconss}/>}/>Search Twitter</Button>
    </div>
  )
}

export default Search
