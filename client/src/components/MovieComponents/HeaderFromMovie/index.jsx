import React from 'react'
import './HeaderFromMovie.scss'
import  MovieHeader from '../../../../image/MovieHeader.jpg'

function HeaderFromMovie() {    
  return (
         <div className='headerFromMovie' style={{ backgroundImage: `url(${MovieHeader})` }}>
            <p>MOVIE</p>
        </div>
  )
}

export default HeaderFromMovie