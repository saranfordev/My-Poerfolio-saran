import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Resume.jpg'
import Resume from '../../assets/MyResume.pdf'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""/>
          </div>
          <h4>My Portfolio</h4>
          <div className="portfolio__item-cta">
            <a href={Resume} download className='btn'>Download</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio