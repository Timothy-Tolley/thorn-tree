import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './team.css'

import Chris from '../Chris/Chris'
import Hilary from '../Hilary/Hilary'

class Team extends React.Component {
  render () {
    return (
      <div className = 'team-cont'>
        <ScrollableAnchor id={'team'}>
          <p className = 'team-header'>
          TEAM
          </p>
        </ScrollableAnchor>
        <Chris />
        <Hilary />
      </div>
    )
  }
}

export default Team
