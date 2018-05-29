import React from 'react'

import './footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className = 'footer-cont'>
        <p className = 'footer-title'>
          THORN TREE LTD
        </p>
        <a className = 'footer-link' href = '/'>
          HOME
        </a>
        <a className = 'footer-link' href = '/#about'>
           ABOUT
        </a>
        <a className = 'footer-link' href = '/#contact'>
           CONTACT
        </a>
      </div>
    )
  }
}

export default Footer
