import React from 'react'

import './footer.css'

class Footer extends React.Component {
  render () {
    return (
      <div className = 'footer-container'>
        <p className = 'footer-text'>
          Created by <a className = 'tim-link' href = 'https://timothytolley.com'>Timothy Tolley</a>
        </p>
      </div>
    )
  }
}

export default Footer
