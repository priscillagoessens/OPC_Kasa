import logo from '../../assets/picto/Logo-red.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-container_elements'>
        <img className='header-container_elements-img' src={logo} alt="Kasa-logo" />
        <nav className='header-container_elements_nav'>
          <NavLink className='header-container_elements_nav-link' to="/">Accueil</NavLink>
          <NavLink className='header-container_elements_nav-link' to="/about">A propos</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Header