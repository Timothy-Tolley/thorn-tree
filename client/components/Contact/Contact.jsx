import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './contact.css'

class Contact extends React.Component {
  render () {
    return (
      <div className = 'contact-container'>
        <ScrollableAnchor id={'contact'}>
          <h2 className = 'contact-header'> CONTACT </h2>
        </ScrollableAnchor>
        <div className = 'contact-form'>
          {/* contact form */}
        </div>
      </div>
    )
  }
}

export default Contact
