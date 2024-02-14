import logo from '../../assets/picto/Logo-light.png'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-container_elements'>
        <img src={logo} alt="" />
        <p className='footer-container_elements_text-color'>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
