import React from 'react'
import './Frontend.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


function Frontend() {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
  };

  return (

    <div className='body'>
    <div className="slider-container">

      <Slider {...settings}>
        <div className="box html-box">
          <h2 className='h'>HTML</h2>
          <FaHtml5 className='Ht' />
          <p className='hp'>Structure your web pages with semantic elements.</p>
        </div>

        <div className="box css-box">
          <h2 className='c'>CSS</h2>
          <FaCss3Alt className='Cs' />
          <p className='cp'>Style with Flexbox, Grid layouts, animations, and transitions. Use variables for theming, media queries for responsiveness. Hover to see interactive scaling.</p>
        </div>
      </Slider>
    </div>
    </div>

  )
}

export default Frontend
