import React from 'react'

import './hilary.css'

class Hilary extends React.Component {
  render () {
    return (
      <div className = 'hilary-cont'>
        <div className = 'hilary-left'>
          <p className = 'hilary-header' >
            HILARY TOLLEY, PhD
          </p>
          <p className = 'hilary-sec-header' >
            Research Services
          </p>
          <p className = 'hilary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className = 'email-text-hil'>
            Email: <a href='mailto: hilary@thorntree.nz' className = 'email-link' > hilary@thorntree.nz
            </a>
          </p>
        </div>
        <div className = 'hilary-right'>
          <img src = '/images/Hilary.jpg' alt = 'Hilary' className = 'hilary-img'/>
        </div>
      </div>
    )
  }
}

export default Hilary
