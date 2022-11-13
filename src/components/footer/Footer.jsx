import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Thanks For Visiting</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Saranwarin/"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SARAN For Dev. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer