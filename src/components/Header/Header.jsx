import logo from '../../assets/picto/Logo-red.svg'
import { Link } from 'react-router-dom'
import './_header.scss'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-container_elements'>
        <img className='header-container_elements-img'src={logo} alt="Kasa-logo" />
        <nav className='header-container_elements_nav'>
          <Link className='header-container_elements_nav-link' to="/">Accueil</Link>
          <Link className='header-container_elements_nav-link' to="/apropos">A propos</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header