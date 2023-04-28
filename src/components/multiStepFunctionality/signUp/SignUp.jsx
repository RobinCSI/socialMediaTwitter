import React, {useState} from 'react'
import UserDetails from '../userDetails/UserDetails'
import Privacy from '../../privacy/Privacy'
import Validation from '../validation/Validation'

const SignUp = () => {
    const [stateStep,setStateStep]=useState({
        step:1, 
        name:'',
        phone:'',
        dob:''
    })
    const {step}=stateStep
    const {name, phone, dob}=stateStep
    const values={name, phone, dob}


    const prevStep=()=>{
        const {step}=stateStep
        setStateStep({step: step-1})

    }

    const nextStep=()=>{
        const {step}=stateStep
        setStateStep({step: step+1})

    }

    const handleChange=input=>(e)=>{
        setStateStep({[input]: e.target.value})

    }
    console.log(step)

    switch(step){
        case 1: return(<UserDetails nextStep={nextStep} handleChange={handleChange} values={values}/>)
        case 2: return(<Privacy prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={values}/>)
        case 3: return(<Validation prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={values}/>)
        default:
    }
}
export default SignUp