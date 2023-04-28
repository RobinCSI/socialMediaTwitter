
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './pages/Navbar'

import Layout from "./components/layout/Layout";


import Logins from './pages/Login/login'

function App() {
 

  return (
    <>

      <div>
      
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Layout><Login/></Layout>}/>
        <Route path="/register" element={<Layout><Register/></Layout>}/>
      </Routes>

    <Logins/>

    </>
  )
}

export default App
