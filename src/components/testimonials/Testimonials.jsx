import React from 'react'
import './testimonials.css'
import AVTAR1 from '../../assets/avatar1.jpg'
import AVTAR2 from '../../assets/avatar2.jpg'
import AVTAR3 from '../../assets/avatar3.jpg'
import AVTAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTAR1,
    name: 'Kanoot Suwanwakool',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste consectetur quisquam sapiente expedita vero totam consequatur reprehenderit facere, distinctio quam reiciendis beatae id repudiandae aut doloremque a temporibus officia porro eum maxime quas. Non, cumque nesciunt. At, natus quos."
  },
  {
    avatar: AVTAR2,
    name: 'Saran Warin',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste consectetur quisquam sapiente expedita vero totam consequatur reprehenderit facere, distinctio quam reiciendis beatae id repudiandae aut doloremque a temporibus officia porro eum maxime quas. Non, cumque nesciunt. At, natus quos."
  },
  {
    avatar: AVTAR3,
    name: 'Peranut Meesakun',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste consectetur quisquam sapiente expedita vero totam consequatur reprehenderit facere, distinctio quam reiciendis beatae id repudiandae aut doloremque a temporibus officia porro eum maxime quas. Non, cumque nesciunt. At, natus quos."
  },
  {
    avatar: AVTAR4,
    name: 'Vorvit sanjaikla',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste consectetur quisquam sapiente expedita vero totam consequatur reprehenderit facere, distinctio quam reiciendis beatae id repudiandae aut doloremque a temporibus officia porro eum maxime quas. Non, cumque nesciunt. At, natus quos."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          data.map(({avatar,name,review}, index)=>{
            return (
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials