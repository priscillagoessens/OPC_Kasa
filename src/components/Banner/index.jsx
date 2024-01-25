import React from 'react'
import banner from '../../assets/img/Beach.jpg'
import '../../styles/_banner.scss'

function Banner() {
  return (
    <div>
      <div className='container-banner'>
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Banner
