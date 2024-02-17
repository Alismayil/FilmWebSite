import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromAnimation from '../../components/AnimationComponents/HeaderFromAnimation';
import AnimationCartBox from '../../components/AnimationComponents/AnimationCartBox';
import Loading from '../../components/Loading';

function AnimationsPage({ setloading, loading }) {
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
              <title>Animations</title>
            </Helmet>
            <HeaderFromAnimation />
            <AnimationCartBox />
          </>
        )
      }
    </>
  )
}

export default AnimationsPage