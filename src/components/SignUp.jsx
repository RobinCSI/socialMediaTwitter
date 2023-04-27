import React from "react";
import Box from '@mui/material/Box';
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";


export default function SignUp() {
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  let years = Array(120).fill(1903).map((ele,index)=>ele+index)
  console.log(years)
  return (
    <div>
       <Box
       
       sx={{
        paddingRight:'80px',
        paddingLeft:'80px',
        //  width: 550,
         height: 547,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'black'
      }}
      
      
      >
      <h2 style={{color:'black'}}>Create your account</h2>
      <FormControl>
      <TextField sx={{backgroundColor: red, width:438, height:56}} id="filled-basic" label="Name" variant="outlined" />
      <br/>
      <TextField sx={{backgroundColor: red, width:438, height:56}} id="filled-basic" label="Phone" variant="outlined" />
      <br/>
      <TextField sx={{display:"inline"}} label='Month' select>
        {months.map((month)=>{
          return <MenuItem>{month}</MenuItem>
        })}
        
      </TextField>
      <TextField sx={{display:"inline"}} label='Years' select>
        {years.map((year)=>{
          return <MenuItem>{year}</MenuItem>
        })}
        
      </TextField>
  </FormControl>
      
      
    </Box>
    </div>
  )
}
