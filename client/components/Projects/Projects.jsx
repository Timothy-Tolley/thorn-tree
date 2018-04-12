import React from 'react'

import './projects.css'

import Footer from '../Footer/Footer'
import DetachedHead from '../DetachedHead/DetachedHead'

class Projects extends React.Component {
  render () {
    return (
      <div className = 'projects-page'>
        <DetachedHead />
        <div className = 'projects-container'>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Projects
