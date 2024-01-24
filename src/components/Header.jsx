import logo from '../assets/picto/Logo-red.svg'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

function Header() {
  return (
    <div className='header-container'>
      <img src={logo} alt="Kasa-logo" />
      <nav className='header-container_nav'>
        <Link className='header-container_nav-link' to="/">Accueil</Link>
        <Link className='header-container_nav-link' to="/apropos">A propos</Link>
      </nav>
    </div>
  )
}

export default Header

// export default function Header(){

// }