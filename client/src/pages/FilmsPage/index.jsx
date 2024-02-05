import React from 'react'
import {Helmet} from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromFilm from '../../components/FilmComponents/HeaderFromFilm';

function FilmsPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Films</title>
    </Helmet>
    <HeaderFromFilm/>

  </>
  )
}

export default FilmsPage