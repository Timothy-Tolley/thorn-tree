import React from 'react'
import {Route} from 'react-router-dom'

// import Home from './Home/Home'
// import Projects from './Projects/Projects'
import PlaceHolder from './PlaceHolder/PlaceHolder'

class App extends React.Component {
  render () {
    return (
      <div className = 'page'>
        <Route exact path = '/' component = {PlaceHolder}/>
        {/* <Route exact path = '/' component = {Home}/> */}
        {/* <Route exact path = '/projects' component = {Projects} /> */}
      </div>
    )
  }
}

export default App
