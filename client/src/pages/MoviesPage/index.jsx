import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import HeaderFromMovie from '../../components/MovieComponents/HeaderFromMovie';
import NotMeanBox from '../../components/NotMeanBox';
import MovieCards from '../../components/MovieComponents/MovieCards';
import Loading from '../../components/Loading';

function MoviesPage({ setloading, loading }) {


  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)

    setloading(true)
  }, [])
  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <NotMeanBox />
            <Helmet>
              <meta charSet="utf-8" />
              <title>Movies</title>
            </Helmet>
            <HeaderFromMovie />
            <MovieCards />
          </>
        )
      }
    </>
  )
}

export default MoviesPage