import React from 'react'
import './AboutPageAdmin.scss'
import NotMeanBoxPart2 from '../../components/NotMeanBoxPart2'
import Dashboard from '../../layout/Dashboard'
import InformAdmin from '../../components/AboutAdmin/InformAdmin'
import PersonalAdmin from '../../components/AboutAdmin/PersonalAdmin'
// import NotMeanBox from '../../Components/NotMeanBox'
// import PersonalAdmin from '../../Components/AboutComponents/PersonalAdmin'
// import InformAdmin from '../../Components/AboutComponents/InformAdmin'

function AboutPageAdmin() {
  return (
    <div style={{ display: 'flex' }}>
      <NotMeanBoxPart2 />
      <div id='adminAboutPage'>
        <Dashboard />
        <PersonalAdmin />
        <InformAdmin />
      </div>
    </div>
  )
}

export default AboutPageAdmin