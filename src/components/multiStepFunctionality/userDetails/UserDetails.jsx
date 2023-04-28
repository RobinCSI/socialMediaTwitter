import React from 'react'
import { TextField } from '@mui/material'

const UserDetails = ({nextStep, handleChange, values}) => {
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
        // console.log(step)
      }
    return (
    <div>
        <p>This is User Details page</p>
        <form>
        <TextField
            placeholder="Name"
            label="Name"
            onChange={handleChange('name')}
            defaultValue={values.name}
            />
        <TextField
            placeholder="Phone"
            label="Phone"
            onChange={handleChange('phone')}
            defaultValue={values.phone}
            />
        <TextField
            placeholder="dob"
            label="dob"
            onChange={handleChange('dob')}
            defaultValue={values.name}
            />
            <button onClick={ Continue }>Next</button>
        </form>
    </div>
    )
}
export default UserDetails