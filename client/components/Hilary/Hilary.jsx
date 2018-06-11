import React from 'react'

import './hilary.css'

class Hilary extends React.Component {
  render () {
    return (
      <div className = 'hilary-cont'>
        <div className = 'hilary-left'>
          <p className = 'hilary-header' >
            HILARY TOLLEY, PhD
          </p>
          <p className = 'hilary-sec-header' >
            Research Services
          </p>
          <p className = 'hilary-text'>
            Hilary started out as a secondary science teacher in Botswana in the early 80s and over the next decade taught in a variety of settings in Southern Africa.  During the nineties she and Chris started a family and lived in Nepal, Sir Lanka, Vietnam and Fiji before immigrating to New Zealand in 2001.  To consolidate her extensive developing country experience Hilary studied for a Masters in Development Studies at the University of Auckland and graduated in 2004.  Her thesis critiqued international aid’s focus on Basic Education at that time and explored the impact of this emphasis in Fiji and Samoa.
          </p>
          <p className = 'hilary-text'>
            Since 2004 Hilary has gained considerable research experience in both education and international development and have authored or co-authored 11 peer-reviewed articles/chapters and over 20 technical reports and conference papers.  In 2013 she gained a PhD in Development Studies; her thesis took a complexity approach to analysing international aid’s Sector Wide Approach to funding education development in Solomon Islands and Tonga.
          </p>
          <p className = 'hilary-text'>
            In 2013 she joined the University of Auckland’s School of Population Health as a project manager and research fellow for Prof Boyd Swinburn.  In this role she managed a complex and ambitious collaborative project aimed at improving the monitoring data for non-communicable diseases across the 21 Pacific Island countries and territories (PICTs).  This involved working closely with all the major stakeholders in the region, including the Pacific Community (SPC), WHO, Pacific Islands Health Officers Association (PIHOA) and the Fiji National University, as well as many of PICTs’ health officials. Although her input ended at the end of 2015 due to funding constraints, Hilary was instrumental in developing the Pacific Monitoring Alliance for NCD Action (MANA) Dashboard – a evidence-based ‘traffic light’ monitoring system to track PICTs’ progress on developing policies and legislation aimed at preventing NCDs.  The first dashboard report, depicting the 2017 status on NCD policy and legislation in the PICTs, was presented at the annual Heads on Health Meeting in April 2018.  This report should be publically available soon.
          </p>
          <p className = 'hilary-text'>
            In 2016 Hilary continued to work with Prof Swinburn and project managed a small pilot study using an innovative Systems Science approach to explore the influences and feedback loops related to overweight prevention for under-fives in early childhood centre settings.  This drew on her interest in complexity science and introduced her to novel software developments for visualising the effects of feedback loops.
          </p>
          <p className = 'hilary-text'>
            Following a move from Auckland to Raglan in 2017, Hilary’s work has shifted to offering remote research / academic services.  Her clients include academics in the areas of public health and education and take the form of literature searches and reviews, report writing, proposal preparation, editing and proof reading, and marking.
          </p>
          <p className = 'email-text-hil'>
            Email: <a href='mailto: hilary@thorntree.nz' className = 'email-link' > hilary@thorntree.nz
            </a>
          </p>
          <p className = 'hil-cv-link-cont'>
            <a href="/docs/hilary-tolley-cv.pdf" download="Hilary-Tolley-CV" className = 'cv-link'>
            Download Hilary&#8217;s CV
            </a>
          </p>
        </div>
        <div className = 'hilary-right'>
          <img alt = 'Hilary' className = 'hilary-img'/>
        </div>
      </div>
    )
  }
}

export default Hilary
