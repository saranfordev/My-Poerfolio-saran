import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'
import {HiOutlineUsers} from 'react-icons/hi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Months Studying</small>
            </article>
          
            <article className="about__card">
              <HiOutlineUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
          
            <article className="about__card">
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Rem voluptatibus numquam earum, placeat iure magnam perspiciatis ex incidunt voluptates alias. 
            Iste deleniti distinctio nostrum perferendis laborum necessitatibus? Tenetur, 
            adipisci perferendis?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About