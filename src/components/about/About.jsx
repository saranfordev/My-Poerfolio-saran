import React from 'react'
import './about.css'
import ME from '../../assets/ken2.jpg'
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
              <small>0+ Worldwide</small>
            </article>
          
            <article className="about__card">
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>1+ Completed</small>
            </article>
          </div>

          <p>
            Hi, I'm Ken and I'd like to challenge my skill and looking for an opportunity
            to work with a strong and reliable company. I'm a hard worker, ready to try new things.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About