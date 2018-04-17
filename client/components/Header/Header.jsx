import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

class Header extends React.Component {
  render () {
    return (
      <div className = 'header-container'>
        <div className = 'header-section'>
          <a href='#about' className = 'header-link'>
            <p className = 'header-link'> About </p>
          </a>
        </div>
        <div className = 'header-section'>
          <a href='#team' className = 'header-link'>
            <p className = 'header-link'> Team </p>
          </a>
        </div>
        <div className = 'header-section'>
          <Link to = '/' className = 'logo-image-cont'>
            <img src = '/images/thorntree-full.png' className = 'logo-image'/>
          </Link>
        </div>
        <div className = 'header-section'>
          <a href='#projects' className = 'header-link'>
            <p className = 'header-link'> Projects </p>
          </a>
        </div>
        <div className = 'header-section'>
          <a href='#contact' className = 'header-link'>
            <p className = 'header-link'> Contact </p>
          </a>
        </div>
      </div>
    )
  }
}

export default Header
