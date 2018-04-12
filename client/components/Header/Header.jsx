import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

class Header extends React.Component {
  render () {
    return (
      <div className = 'header-container'>
        <a href='#about' className = 'header-link'>
          <p className = 'header-link'> About </p>
        </a>
        <a href='#team' className = 'header-link'>
          <p className = 'header-link'> Team </p>
        </a>
        <Link to = '/' className = 'logo-image-cont'>
          <img src = '' className = 'logo-image'/>
        </Link>
        <a href='#projects' className = 'header-link'>
          <p className = 'header-link'> Projects </p>
        </a>
        <a href='#contact' className = 'header-link'>
          <p className = 'header-link'> Contact </p>
        </a>
      </div>
    )
  }
}

export default Header
