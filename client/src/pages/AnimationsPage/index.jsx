import React from 'react'
import {Helmet} from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromAnimation from '../../components/AnimationComponents/HeaderFromAnimation';

function AnimationsPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Animations</title>
    </Helmet>
<HeaderFromAnimation/>
  </>
  )
}

export default AnimationsPage