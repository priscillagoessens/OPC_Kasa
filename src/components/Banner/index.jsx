import React from 'react'
import banner from '../../assets/img/Beach.jpg'
import './_banner.scss'

function Banner() {
  return (
    <div className='banner-section'>
      <div className='banner-section_container'>
        <img src={banner} alt="" />
        <h1 className='banner-section_container_title'>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
