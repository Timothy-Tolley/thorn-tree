import React from 'react'
import {Link} from 'react-router-dom'

import './detached-head.css'

class DetachedHead extends React.Component {
  render () {
    return (
      <div className = 'det-header-container'>
        <Link to ='/#about' className = 'det-header-link'>
          <p className = 'det-header-link'> About </p>
        </Link>
        <Link to='/#team' className = 'det-header-link'>
          <p className = 'det-header-link'> Team </p>
        </Link>
        <Link to = '/' className = 'det-logo-image-cont'>
          <img src = '' className = 'det-logo-image'/>
        </Link>
        <Link to='/#projects' className = 'det-header-link'>
          <p className = 'det-header-link'> Projects </p>
        </Link>
        <Link to='/#contact' className = 'det-header-link'>
          <p className = 'det-header-link'> Contact </p>
        </Link>
      </div>
    )
  }
}

export default DetachedHead
