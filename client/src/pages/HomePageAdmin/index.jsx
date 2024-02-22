import React from 'react'
import './HomePageAdmin.scss'
import NotMeanBoxPart2 from '../../components/NotMeanBoxPart2'
import FilmCategoryAdmin from '../../components/HomeComponents/FilmCategoryAdmin'
import Dashboard from '../../layout/Dashboard'
import ReklamAdmin from '../../components/HomeComponents/ReklamAdmin'
// import NotMeanBox from '../../Components/NotMeanBox'
// import FilmCategoryAdmin from '../../Components/HomeComponents/FilmCategoryAdmin'
// import ReklamAdmin from '../../Components/HomeComponents/ReklamAdmin'

function HomePageAdmin() {
  return (
    <div style={{display:'flex'}}>
    <NotMeanBoxPart2/>
    <div id='adminHomePage'>
      <Dashboard/>
    <FilmCategoryAdmin/>
    <ReklamAdmin/>
    </div>
    </div>
  )
}

export default HomePageAdmin