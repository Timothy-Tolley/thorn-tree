import React from 'react'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import './about.css'

class About extends React.Component {
  componentWillMount () {
    configureAnchors({})
  }

  render () {
    return (
      <div className = 'about-cont'>
        <ScrollableAnchor id={'about'}>
          <p className = 'about-header' >
          ABOUT
          </p>
        </ScrollableAnchor>
        <div className = 'about-text-cont'>
          <img src = '/images/texture.jpg' alt = 'texture' className = 'about-img-large'/>
          <p className = 'about-highlight'>
          &#39;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&#39;
          </p>
          <p className = 'about-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <img src = '/images/texture.jpg' alt = 'texture' className = 'about-img'/>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }
}

export default About
