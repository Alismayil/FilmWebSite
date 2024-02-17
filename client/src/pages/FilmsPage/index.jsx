import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromFilm from '../../components/FilmComponents/HeaderFromFilm';
import FilmCartBox from '../../components/FilmComponents/FilmCartBox';
import Loading from '../../components/Loading';

function FilmsPage({ setloading, loading }) {
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
              <title>Films</title>
            </Helmet>
            <HeaderFromFilm />
            <FilmCartBox />
          </>
        )
      }
    </>
  )
}

export default FilmsPage