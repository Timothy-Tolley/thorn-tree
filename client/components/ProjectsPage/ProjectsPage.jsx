import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import './projects-page.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {projects} from '../../data/project-data'

class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      projects: projects
    }
  }
  render () {
    return (
      <div className = 'projects-cont'>
        <Header />
        <div className = 'all-projects-cont'>
          <ScrollableAnchor id = {'projects'}>
            <p className = 'projects-header'>
          PROJECTS
            </p>
          </ScrollableAnchor >
          {this.state.projects.map(project => {
            return (

              <div className = 'single-project-cont' key = {project.id}>
                <div className = 'single-project-left'>
                  <ScrollableAnchor id={project.id}>
                    <p className = 'single-project-name'>
                      {project.name}
                    </p>
                  </ScrollableAnchor>
                  <p className = 'single-project-location'>
                    {project.location}
                  </p>
                  <p className = 'single-project-company'>
                    {project.company} {project.timeframe}
                  </p>
                  <p className = 'single-project-tagline'>
                  &#39;{project.tagline}&#39;
                  </p>
                  <p className = 'single-project-description'>
                    {project.description}
                  </p>
                </div>
                <div className = 'single-project-right'>
                  <img src = {project.image1} alt = {project.name} className = 'single-project-img'/>
                </div>
              </div>
            )
          }
          )
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default Projects
