import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {configureAnchors} from 'react-scrollable-anchor'

import './header.css'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showMobileDropdown: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  componentWillMount () {
    configureAnchors({})
  }

  toggleDropdown () {
    this.setState({
      showMobileDropdown: !this.state.showMobileDropdown
    })
    document.getElementById('header-cont').classList.toggle('header-active')
    document.getElementById('mobile-menu-ham').classList.toggle('mobile-menu-img-active')
    document.getElementById('mobile-menu-ham').classList.toggle('mobile-menu-img')
  }

  render () {
    return (
      <div className = 'header-cont' id ='header-cont'>
        <div className = 'mobile-header'>
          <div className = 'mobile-header-left'>
            <p className = 'mobile-title'> THORN TREE LTD </p>
          </div>
          <div className = 'mobile-header-right'>
            <div className = 'mobile-menu-cont'>
              <img id = 'mobile-menu-ham' className = 'mobile-menu-img' onClick = {this.toggleDropdown}/>
            </div>
            <CSSTransition
              in={this.state.showMobileDropdown}
              timeout={300}
              classNames="mobile-menu"
              unmountOnExit>
              <div className = 'menu-dropdown'>
                <a href ='/' className = 'mobile-header-link'>
                  HOME
                </a>
                <a href ='/#about' className = 'mobile-header-link'>
                  ABOUT
                </a>
                <a href='/#team' className = 'mobile-header-link'>
                  TEAM
                </a>
                <a href='/projects' className = 'mobile-header-link'>
                  PROJECTS
                </a>
                <a href='/#contact' className = 'mobile-header-link'>
                  CONTACT
                </a>
              </div>
            </CSSTransition>
          </div>
        </div>
        <div className = 'main-header' >
          <div className = 'main-header-left'>
            <div className = 'img-cont-main'>
              <img src = '/images/thorntree-double.png' className = 'thorn-tree-logo'/>
            </div>
            <a href='/' className = 'main-header-link'>
              <p className = 'main-title'> THORN TREE LTD </p>
            </a>
          </div>
          <div className = 'main-header-right'>
            <a href='/#about' className = 'main-header-link'>
                ABOUT
            </a>
            <a href='/#team' className = 'main-header-link'>
                TEAM
            </a>
            <a href='/projects' className = 'main-header-link'>
                PROJECTS
            </a>
            <a href='/#contact' className = 'main-header-link'>
                CONTACT
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
