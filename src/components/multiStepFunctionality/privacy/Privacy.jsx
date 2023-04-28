import React from 'react'

const Privacy = ({prevStep, nextStep, handleChange, values}) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
      }
    const Continue = e => {
        e.preventDefault();
        nextStep();
        // console.log(step)
      }
    // console.log(step)
  return (
    <div>
    <div>This is Privacy and Customer Preferences page</div>
    <button onClick={ Previous }>Previous</button>
    <button onClick={ Continue }>Next</button>
    </div>

  )
}

export default Privacy