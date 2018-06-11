import React from 'react'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import './about.css'

class About extends React.Component {
  componentWillMount () {
    configureAnchors({})
  }

  render () {
    return (
      <div className = 'about-cont'>
        <ScrollableAnchor id={'about'}>
          <p className = 'about-header' >
          ABOUT
          </p>
        </ScrollableAnchor>
        <div className = 'about-text-cont'>
          <div className = 'containment-div-left'>
            <div className = 'photo-blurb-cont'>

              <img src = '/images/cambodia.JPG' alt = 'Cambodia Road Rehabilitation' className = 'about-img-large'/>

              <p className = 'img-content-large'>
            Northwestern Rural Development Project Cambodia - Road Rehabilitation
              </p>
            </div>
            <div className = 'photo-blurb-cont'>

              <img src = '/images/vanuatu.JPG' alt = 'Vanuatu Roading Project' className = 'about-img-large'/>

              <p className = 'img-content-large'>
              MCC Vanuatu Transport Infrastructure Project - Civil Works
              </p>
            </div>
          </div>
          <div className = 'containment-div-right'>
            <p className = 'about-highlight'>
             &#39;Thorn Tree is a small consulting company focussed on providing support services to the International Development sector.&#39;
            </p>
            <p className = 'about-text'>
             Chris and Hilary Tolley, the Directors of Thorn Tree, have lived and worked in developing countries in Africa, Asia and the Pacific for the past 35 years, and have developed a wealth of experience that is applied to the services they provide.

              <img src = '/images/cambodia.JPG' alt = 'Cambodia Road Rehabilitation' className = 'about-img'/>
              <img src = '/images/nepal.JPG' alt = 'texture' className = 'about-img'/>
            Chris’s civil engineering background has led him to specialise in the procurement of goods, works and services in the transportation, water and power sectors; in particular on behalf of international financing institutions, such as the World Bank and Asian Development Bank. Hilary’s education background, and more latterly population health experience, allows her to offer research services in these areas, often related to issues affecting the peoples of the Pacific Island countries and territories.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
