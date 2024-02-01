import React from 'react'
import './_banner.scss'


function Banner({source, title}) {
  return (
    <div className='banner-section'>
      <div className='banner-section_container'>
        <img src={source} alt="" />
        <h1 className='banner-section_container_title'>{title}</h1>
      </div>
    </div>
  )
}

export default Banner
