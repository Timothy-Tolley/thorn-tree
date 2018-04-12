import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './team.css'

class Team extends React.Component {
  render () {
    return (
      <div className = 'team-container'>
        <ScrollableAnchor id={'team'}>
          <h2 className = 'team-header'> Team </h2>
        </ScrollableAnchor>
        <p className = 'team-text'>

        </p>
      </div>
    )
  }
}

export default Team
