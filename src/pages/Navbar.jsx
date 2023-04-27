import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Login.css";
function Navbar() {
  return (
    <div className='navbar'>
        <div className='textNavbar'>
            <p className='msg'>
<h2>Don’t miss what’s happening</h2>
People on Twitter are the first to know.</p>
        </div>
      {/* <NavLink to={"/"}>Home</NavLink> */}
      <div className='yellow'>
      <NavLink className='navLink' to={"/login"}>Login</NavLink>
      <NavLink className='navLink' to={"/register"}>signup</NavLink>
      </div>
     
    </div>
  )
}

export default Navbar
