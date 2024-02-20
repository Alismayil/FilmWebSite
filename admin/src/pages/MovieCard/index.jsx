import React from 'react'
import './MovieCard.scss'
import NotMeanBox from '../../Components/NotMeanBox'
import MovieComponents from '../../Components/MovieComponents'

function MovieCard() {
  return (
    <div style={{ display: 'flex' }}>
      <NotMeanBox />
      <div id='adminMovieCardPage'>
        <MovieComponents/>
      </div>
    </div>
  )
}

export default MovieCard