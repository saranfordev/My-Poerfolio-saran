import React, { useState } from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {AiOutlineMessage} from 'react-icons/ai'


const Nav = () => {
  const [activeNav,setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={()=>{setactiveNav('#home')}} className={activeNav === '#home' ? 'active':''}><BiHomeAlt/></a>
      <a href="#about" onClick={()=>{setactiveNav('#about')}} className={activeNav === '#about' ? 'active':''}><BiUser/></a>
      <a href="#experience" onClick={()=>{setactiveNav('#experience')}} className={activeNav === '#experience' ? 'active':''}><BsBook/></a>
      <a href="#portfolio" onClick={()=>{setactiveNav("#portfolio")}} className={activeNav === '#portfolio' ? 'active':''}><HiOutlineDocumentReport/></a>
      <a href="#contact" onClick={()=>{setactiveNav("#contact")}} className={activeNav === '#contact' ? 'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav