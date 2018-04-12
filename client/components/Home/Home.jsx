import React from 'react'

import './home.css'

import Team from '../Team/Team'
import About from '../About/About'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-container'>
        <Header />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Home
