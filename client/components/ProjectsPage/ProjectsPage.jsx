import React from 'react'

import './projects-page.css'

import Footer from '../Footer/Footer'
import DetachedHead from '../DetachedHead/DetachedHead'

class ProjectsPage extends React.Component {
  render () {
    return (
      <div className = 'ProjectsPage-page'>
        <DetachedHead />
        <div className = 'ProjectsPage-container'>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default ProjectsPage
