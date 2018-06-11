import React from 'react'

import './home.css'

import Team from '../Team/Team'
import About from '../About/About'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import ProjectScroll from '../ProjectScroll/ProjectScroll'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-cont'>
        <Header />
        <ProjectScroll />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home
