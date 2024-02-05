import React from 'react'
import './HeaderFromFilm.scss'
import FilmHeader from '../../../../image/FilmHeader.jpeg'

function HeaderFromFilm() {
  return (
    <div className='headerFromFilm' style={{ backgroundImage: `url(${FilmHeader})` }}>
    <p>FILMS</p>
</div>
  )
}

export default HeaderFromFilm