import React from 'react'
import './AboutPage.scss'
import NotMeanBox from '../../Components/NotMeanBox'
import PersonalAdmin from '../../Components/AboutComponents/PersonalAdmin'
import InformAdmin from '../../Components/AboutComponents/InformAdmin'

function AboutPage() {
  return (
    <div style={{display:'flex'}}>
    <NotMeanBox/>
    <div id='adminAboutPage'>
      <PersonalAdmin/>
      <InformAdmin/>
    </div>
    </div>
  )
}

export default AboutPage