import React from 'react'
import {Helmet} from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromFilm from '../../components/FilmComponents/HeaderFromFilm';
import FilmCartBox from '../../components/FilmComponents/FilmCartBox';

function FilmsPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Films</title>
    </Helmet>
    <HeaderFromFilm/>
    <FilmCartBox/>
  </>
  )
}

export default FilmsPage