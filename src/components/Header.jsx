import React from 'react'
import logo from '../assets/picto/Logo-red.svg'

function Header() {
  return (
    <div>
      <img src={logo} alt="Kasa-logo" />
      <ul>
        <li>
            <a >Accueil</a>
        </li>
        <li>
            <a>A propos</a>
        </li>
      </ul>
    </div>
  )
}

export default Header

