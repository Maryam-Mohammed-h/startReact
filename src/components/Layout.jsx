import React from 'react'
import { Outlet } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Portfolio from './Portfolio'
import Footer from './Footer'
export default function Layout() {
  return (
    <div>
    <Navbar/>  
    <Outlet></Outlet>  
    <Home></Home>
     <Portfolio></Portfolio> 
    <About></About>
     <Contact/> 
    <Footer/>
    </div>
  )
}
