import React from 'react'
import './_banner.scss'

function Banner(props) {
  return (
    <div className='banner-section'>
      <div className='banner-section_container'>
        <img src={props.source} alt="" />
        <h1 className='banner-section_container_title'>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
