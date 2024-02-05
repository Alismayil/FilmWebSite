import React from 'react'
import {Helmet} from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromSeries from '../../components/SeriesComponents/HeaderFromSeries';

function SeriesPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Series</title>
    </Helmet>
    <HeaderFromSeries/>

  </>
  )
}

export default SeriesPage