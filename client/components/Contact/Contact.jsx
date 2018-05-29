import React from 'react'
import {Form} from 'react-formio'
import ScrollableAnchor from 'react-scrollable-anchor'

import './contact.css'

class Contact extends React.Component {
  render () {
    return (
      <div className = 'contact-cont'>
        <ScrollableAnchor id={'contact'}>
          <p className = 'contact-header'>
          CONTACT
          </p>
        </ScrollableAnchor>
        <Form src="https://fvyqtpqddekwrua.form.io/contactform" />
      </div>
    )
  }
}

export default Contact
