import React from 'react'
import './MovieCardAdmin.scss'
import NotMeanBoxPart2 from '../../components/NotMeanBoxPart2'
import MovieAdd from '../../components/MovieComponents/MovieAdd'
import Dashboard from '../../layout/Dashboard'

// import NotMeanBox from '../../Components/NotMeanBox'
// import MovieComponents from '../../Components/MovieComponents'

function MovieCardAdmin() {
  return (
    <div style={{ display: 'flex' }}>
      <NotMeanBoxPart2 />
      <div id='adminMovieCardPage'>
        <Dashboard/>
        <MovieAdd/>
      </div>
    </div>
  )
}

export default MovieCardAdmin