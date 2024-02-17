import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import FilmCatagory from '../../components/HomeComponents/FilmCatagory';
import Header from '../../components/HomeComponents/Header';
import MostPopular from '../../components/HomeComponents/MostPopular';
import ReklamPoster from '../../components/HomeComponents/ReklamPoster';
import Loading from '../../components/Loading';

function HomePage({ setloading, loading }) {

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
            <Helmet>
              <meta charSet="utf-8" />
              <title>Cinema Gia</title>
            </Helmet>
            <Header />

            <MostPopular />
            <FilmCatagory />
            <ReklamPoster />
          </>
        )
      }
    </>
  )
}

export default HomePage