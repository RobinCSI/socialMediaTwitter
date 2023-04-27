
import React,{useEffect,useState} from 'react'
import  {Alert, Button, TextField}  from '@mui/material'
import Box from '@mui/material/Box';
import style from "./Login.module.css"
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Password } from '@mui/icons-material';

import { Snackbar } from '@mui/base';

const Login = () => {
    const[data,setData]=useState([])
    const[firstInput,setFirstInput]=useState('')
    const[show,setShow]=useState(false)
    const[password,setPassword]=useState("")
   
     //this state for password show and hide
     const [showPassword, setShowPassword] = React.useState(false);

    // This state is for snackBar
    const[open,setOpen]=useState(false)

const userData=[
    {
        name:"Rishi",
        email:"rishi@gmail.com",
        phnNO:"12345678",
        password:"Rishi@123"
    },
    {
        name:"Ravi",
        email:"ravi@gmail.com",
        phnNO:"2345678",
        password:"Ravi@123"
    },
    {
        name:"Rahul",
        email:"rahul@gmail.com",
        phnNO:"345678",
        password:"Rahul@123"
    },
    {
        name:"Robin",
        email:"robin@gmail.com",
        phnNO:"5678",
        password:"Robin@123"
    },
]

localStorage.setItem("users",JSON.stringify(userData))

useEffect(()=>{
    const dataFromLocal= localStorage.getItem("users")
    if(dataFromLocal){
        setData(JSON.parse(dataFromLocal))
    }
    else{
        setData([])
    }
    
   },[])


  function handleSubmit(e){
    e.preventDefault()
     if(firstInput==""){
       alert("Please fill the currect userNaame,email or phon number")
     }
     else{
        const findUser=data.find((user)=>{
            return(
                user.name===firstInput ||  user.email===firstInput || user.phnNO===firstInput
            )
        })
        if(!findUser){
            alert("user data not found")
        }else{
            setShow(!show)
        }
     }
  }

  function handlePasswordSumbit(e){
     e.preventDefault()
     const findUser=data.find((user)=>{
      return(
          user.name===firstInput ||  user.email===firstInput || user.phnNO===firstInput
      )
  })
    if(findUser.password===password){
      // alert("succes Fully loged in")
      setOpen(true)
    
    }
    else{
      alert("please fill the correct Password")
    }
  }

  //this funtions are for password toggle
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // This function is for Cloging snackbar
  function handleClose(){
    setOpen(false)
  }
 
  return (
    <div>
        
      {
        !show? 
        <form  onSubmit={handleSubmit}>
    <Box
      sx={{
        width: 400,
        height: 500,
        backgroundColor: 'white',
      }}
    >
     <div>
     <BsTwitter  className={style.icon}/>
     </div>
     <div>
     <h1 className={style.heading}>Sign in to twitter</h1>
     </div>
      <div>
       <Button variant="contained" sx={{
        backgroundColor:'white',
        color: 'black',
       }}>
        <FcGoogle/> Sign in with Google
       </Button>
      </div>
      <div>
       <Button variant="contained" sx={{
        backgroundColor:'white',
        color: 'black',
       }}>
       <BsApple/>  Sign in with Apple
       </Button>
      </div>
     <div>
     <TextField  onChange={(e)=>setFirstInput(e.target.value)}
      value={firstInput}
      id="filled-basic"
      label="Phone,email, or username"
      variant="filled" 
      />
     </div>
     <div>
       <Button variant="contained" type='submit' sx={{
        backgroundColor:'white',
        color: 'black',
       }}>
        Next
       </Button>
      </div>
      <div>
       <Button variant="contained" sx={{
        backgroundColor:'white',
        color: 'black',
       }}>
       Forgot Password ?
       </Button>
      </div>
      <div>
        <p>Don't have an account? Sign up</p>
      </div>
     </Box>
     </form>
        :
        <div>
          <form  onSubmit={handlePasswordSumbit}>
        <Box
          sx={{
            width: 400,
            height: 500,
            backgroundColor: 'white',
          }}
        >
         <div>
         <BsTwitter  className={style.icon}/>
         </div>
         <div>
         <h1 className={style.heading}>Sign in to twitter</h1>
         </div>
         <div> 
         <TextField id="outlined-basic" value={firstInput} variant="outlined" />
         </div>
         <div>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
             <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
             <FilledInput
             onChange={(e)=>setPassword(e.target.value)}
             id="filled-adornment-password"
             type={showPassword ? 'text' : 'password'}
             endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

         </div>
          <div>
            <p>Don't have an account? Sign up</p>
          </div>
          <div>
              <Button variant="contained" type='submit' sx={{
                 backgroundColor:'white',
                 color: 'black',
                 }}>
                 Next
              </Button>
          </div>
         </Box>
         </form>
        </div>
      }
       
       <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Succesfully Logged in...
       </Alert>
      </Snackbar>
    
    </div>
  )
}

export default Login