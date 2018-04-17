import React from 'react'

import data from '../../data/project-data'

import './project-scroll.css'

class ProjectScroll extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    if (this.state.imageIndex === 2) {
      this.setState({
        imageIndex: 0
      })
    } else {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      })
    }
  }

  render () {
    return (
      <div className = 'project-scroll-container'>
        <img src = {data[this.state.imageIndex]} alt = 'padma bridge works' className = 'scroll-image' onClick = {this.handleClick}/>
      </div>
    )
  }
}

export default ProjectScroll
