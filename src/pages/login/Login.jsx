
import React,{useEffect,useState} from 'react'
import  {Button, TextField}  from '@mui/material'
import Box from '@mui/material/Box';
import style from "./Login.module.css"
import { BsTwitter } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';


const Login = () => {
    const[data,setData]=useState([])
    const[firstInput,setFirstInput]=useState('')
    const[show,setShow]=useState(false)
const userData=[
    {
        name:"Rishi",
        email:"rishi@gmail.com",
        phnNO:"12345678"
    },
    {
        name:"Ravi",
        email:"ravi@gmail.com",
        phnNO:"2345678"
    },
    {
        name:"Rahul",
        email:"rahul@gmail.com",
        phnNO:"345678"
    },
    {
        name:"Robin",
        email:"robin@gmail.com",
        phnNO:"5678"
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
         <TextField
          id="filled-basic"
          // label="Phone,email, or username"
          value={firstInput}
          variant="filled" 
          />
         </div>
         <div>
         <TextField
          id="filled-basic"
          label="Phone,email, or username"
          variant="filled" 
          />
         </div>
          <div>
            <p>Don't have an account? Sign up</p>
          </div>
         </Box>
        </div>
      }
   
    
    </div>
  )
}

export default Login