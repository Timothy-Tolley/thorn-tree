import React from 'react'

import './project-scroll.css'
import {projects} from '../../data/project-data.js'

class ProjectScroll extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      projectImages: projects.map(project => { return [project.image1, project.id, project.name, project.tagline] }),
      currentIndex: 0
    }
    this.nextImage = this.nextImage.bind(this)
    this.previousImage = this.previousImage.bind(this)
  }

  nextImage () {
    if (this.state.currentIndex === this.state.projectImages.length - 1) {
      this.setState({
        ...this.state,
        currentIndex: 0
      })
    } else {
      this.setState({
        ...this.state,
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  previousImage () {
    if (this.state.currentIndex === 0) {
      this.setState({
        ...this.state,
        currentIndex: this.state.projectImages.length - 1
      })
    } else {
      this.setState({
        ...this.state,
        currentIndex: this.state.currentIndex - 1
      })
    }
  }
  render () {
    return (
      <div className = 'project-scroll-cont'>
        <a href={`/projects/#${this.state.projectImages[this.state.currentIndex][1]}`} className = 'scroll-image-link'>
          <img src = {`${this.state.projectImages[this.state.currentIndex][0]}`} alt = 'Project Image' className = 'project-scroll-image'/>
        </a>
        <div className = 'scroll-info-cont'>
          <div className = 'arrows-cont'>
            <img src = '/images/left-arrow.png' className = 'arrow' onClick = {this.previousImage}/>
            <p className = 'of-text'> {this.state.currentIndex + 1}  of {this.state.projectImages.length}
            </p>
            <img src = '/images/right-arrow.png' className = 'arrow' onClick = {this.nextImage}/>
          </div>
          <div className = 'project-tagline-cont'>
            <p className = 'project-scroll-tagline'>
              {
                this.state.projectImages[this.state.currentIndex][3]
              }
            </p>
          </div>
          <div className = 'project-name-cont'>
            <p className = 'project-scroll-name'>
              <a href={`/projects/#${this.state.projectImages[this.state.currentIndex][1]}`} className = 'project-scroll-name-link'>
                {
                  this.state.projectImages[this.state.currentIndex][2]
                }
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectScroll
