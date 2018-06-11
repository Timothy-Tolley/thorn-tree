import React from 'react'

import './chris.css'

class Chris extends React.Component {
  render () {
    return (
      <div className = 'chris-cont'>
        <div className = 'chris-left'>
          <img alt = 'Chris' className = 'chris-img'/>
        </div>
        <div className = 'chris-right'>
          <p className = 'chris-header' >
            CHRIS TOLLEY
          </p>
          <p className = 'chris-sec-header' >
            Procurement and Contracts Specialists
          </p>
          <p className = 'chris-text'>
          Chris is a senior civil engineer with specialist experience in the design, procurement, construction and maintenance of transport sector assets and rural infrastructure, gained over 35 years working in 33 countries world-wide, including in Africa, Europe, Asia and the Pacific.  He has undertaken assignments for the EU, World Bank, Asian Development Bank, Japanese International Cooperation Agency, Islamic Development Bank and the Millennium Challenge Corporation in addition to national governments.
          </p>
          <p className = 'chris-text'>
          Chris has direct specialist technical expertise in a number of areas including procurement of goods, works and services; contract disputes and claims; institutional strengthening and change management; training and capacity building; feasibility studies; and civil engineering in countries as diverse as Afghanistan and Vanuatu, Timor Leste and Botswana, and Indonesia and Uganda.
          </p>
          <p className = 'chris-text'>
          He has led multinational teams on highway design projects in Vanuatu and Fiji; asset management and institutional strengthening projects in the Cook Islands, Fiji and Timor Leste; and construction supervision of highway and rural infrastructure projects in Asia and Africa.
          </p>
          <p className = 'email-text'>
            Email: <a href='mailto: chris@thorntree.nz' className = 'email-link' > chris@thorntree.nz
            </a>
          </p>
          <p className = 'cv-link-cont'>
            <a href="/docs/chris-tolley-general.pdf" download="Chris-Tolley-General-CV" className = 'cv-link'>
            Download Chris&#8217; General CV
            </a>
          </p>
          <p className = 'cv-link-cont'>
            <a href="/docs/chris-tolley-procurement.pdf" download="Chris-Tolley-Procurement-CV" className = 'cv-link'>
            Download Chris&#8217; Procurement CV
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Chris
