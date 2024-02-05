import React from 'react'
import {Helmet} from "react-helmet";
import HeaderFromMovie from '../../components/MovieComponents/HeaderFromMovie';
import NotMeanBox from '../../components/NotMeanBox';

function MoviesPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Movies</title>
    </Helmet>
    <HeaderFromMovie/>

  </>
  )
}

export default MoviesPage