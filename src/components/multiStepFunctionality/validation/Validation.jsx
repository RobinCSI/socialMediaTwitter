import React from 'react'

const Validation = ({prevStep, nextStep, handleChange, values}) => {
    const Previous = e => {
        e.preventDefault();
        prevStep();
      }
    // const Continue = e => {
    //     e.preventDefault();
    //     nextStep();
    //     // console.log(step)
    //   }
  return (
    <div>
    <div>This is Validation form</div>
    <button onClick={ Previous }>Previous</button>
    {/* <button onClick={ Continue }>Next</button> */}
    </div>
  )
}

export default Validation