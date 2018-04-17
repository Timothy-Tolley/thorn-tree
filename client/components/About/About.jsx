import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './about.css'

class About extends React.Component {
  render () {
    return (
      <div className = 'about-container'>
        <div className = 'about-text'>
          <ScrollableAnchor id={'about'}>
            <h2> About </h2>
          </ScrollableAnchor>
          <a href="/docs/" download="Chris-Tolley-Resumé" className = 'CV-link'>
            <p className = 'download-link'> Resumé </p>
          </a>
        </div>
      </div>
    )
  }
}

export default About
