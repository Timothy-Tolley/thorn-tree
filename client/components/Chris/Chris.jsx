import React from 'react'

import './chris.css'

class Chris extends React.Component {
  render () {
    return (
      <div className = 'chris-cont'>
        <div className = 'chris-left'>
          <img src = '/images/Chris.jpg' alt = 'Chris' className = 'chris-img'/>
        </div>
        <div className = 'chris-right'>
          <p className = 'chris-header' >
            CHRIS TOLLEY
          </p>
          <p className = 'chris-sec-header' >
            Procurement and Contracts Specialists
          </p>
          <p className = 'chris-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className = 'email-text'>
            Email: <a href='mailto: chris@thorntree.nz' className = 'email-link' > chris@thorntree.nz
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Chris
