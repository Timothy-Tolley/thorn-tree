import React from 'react'

import './home.css'

import Team from '../Team/Team'
import About from '../About/About'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import ColorU1 from '../ColorU1/ColorU1'
import ProjectScroll from '../ProjectScroll/ProjectScroll'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-container'>
        <Header />
        <ProjectScroll />
        <ColorU1 />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home
