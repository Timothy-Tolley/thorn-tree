import React from 'react'

import './placeholder.css'

class PlaceHolder extends React.Component {
  render () {
    return (
      <div className = 'placeholder-container'>
        <div className = 'placeholder-content'>
          <div className = 'logo-container'>
            <img src = '/images/thorntree-white.png' className = 'placeholder-logo'/>
          </div>
          <h1 className = 'placeholder-header'> Thorn Tree Ltd</h1>
          <h2 className = 'placeholder-header2'> Procurement and Contracts Specialists </h2>
          <p className = 'placeholder-text'> Website Coming Soon </p>
          <div className = 'placeholder-link-cont'>
            <a href="mailto:chris@thorntree.nz" className = 'placeholder-link'>
              <img src = '/images/mail.png' alt = 'mail logo' className = 'ext-logo'/>
            </a>
            <a href="https://www.linkedin.com/in/chris-tolley-9a11b820/" target= '_blank' rel = 'noopener noreferrer' className = 'placeholder-link'>
              <img src = '/images/linkedin.png' className = 'ext-logo' alt = 'linkedin'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaceHolder
