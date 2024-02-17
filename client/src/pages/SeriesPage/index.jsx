import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromSeries from '../../components/SeriesComponents/HeaderFromSeries';
import SeriesCartBox from '../../components/SeriesComponents/SeriesCartBox';
import Loading from '../../components/Loading';

function SeriesPage({ setloading, loading }) {
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
              <title>Series</title>
            </Helmet>
            <HeaderFromSeries />
            <SeriesCartBox />
          </>
        )
      }
    </>
  )
}

export default SeriesPage