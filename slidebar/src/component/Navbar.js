import React, { useState } from 'react'
import '../App.css';

const Navbar = () => {
  const[showLinks,setShowLinks]=useState(false)
  return (
    <div className='Navbar'>
        <div className='leftSide'>
        <div className='links' id={showLinks ? "hidden": ""}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          </div>
          <button onClick={()=>setShowLinks(!showLinks)}>Open</button>
        </div>

        <div className='rightSide'>
      
        </div>
    </div>
  )
}

export default Navbar