import React from 'react'
import './HomePage.scss'
import NotMeanBox from '../../Components/NotMeanBox'
import FilmCategoryAdmin from '../../Components/HomeComponents/FilmCategoryAdmin'
import ReklamAdmin from '../../Components/HomeComponents/ReklamAdmin'

function HomePage() {
  return (
    <div style={{display:'flex'}}>
    <NotMeanBox/>
    <div id='adminHomePage'>
    <FilmCategoryAdmin/>
    <ReklamAdmin/>
    </div>
    </div>
  )
}

export default HomePage