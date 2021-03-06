import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home/Home'
import Projects from './ProjectsPage/ProjectsPage'

class App extends React.Component {
  render () {
    return (
      <div className = 'page'>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/projects' component = {Projects} />
      </div>
    )
  }
}

export default App
