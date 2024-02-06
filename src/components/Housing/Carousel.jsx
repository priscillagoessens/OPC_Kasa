import React from 'react'
import './_Carousel.scss'
import { useState } from 'react';

function Carousel({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images.pictures)
  const previous=()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length -1 :  currentIndex -1;
    setCurrentIndex(newIndex)
  }
  const next=()=>{
    const isFinalSlide =  currentIndex === images.length -1;
    const newIndex = isFinalSlide ? 0 : currentIndex +1
    setCurrentIndex(newIndex)
  }  

  return (
    <div className='carousel'>
      <div className='arrow-previous' onClick={previous}></div>
      <img src={images.pictures} alt="" />
      <div className='arrow-next'onClick={next}></div>
    </div>
  )
}

export default Carousel
