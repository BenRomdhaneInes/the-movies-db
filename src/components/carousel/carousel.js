import React from 'react';
import Slider from "react-slick"
import DetailsBox from '../details-box'
import empty from '../../images/empty.gif'

import './style.scss'
const Carousel = ({items}) => {
  const settings ={
    centerPadding: '100px',
    infinite: true,
    slidesToShow: items.length > 4 ? 4 : items.length,
    centerMode: false,
    slidesToScroll: 1,
    // speed: 500,
    arrows: false,
    draggable: true,
    autoplay: true,
  }
  return(
    items?.length > 0 ? (
    <Slider {...settings} className='carousel'>
      {items?.map((item, index) => <DetailsBox key={index} item={item}/>)}
    </Slider>
    ) : <img src={empty}/>
    
  )
}

export default Carousel