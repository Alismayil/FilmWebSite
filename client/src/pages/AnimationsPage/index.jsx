import React from 'react'
import {Helmet} from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromAnimation from '../../components/AnimationComponents/HeaderFromAnimation';
import AnimationCartBox from '../../components/AnimationComponents/AnimationCartBox';

function AnimationsPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Animations</title>
    </Helmet>
<HeaderFromAnimation/>
<AnimationCartBox/>
  </>
  )
}

export default AnimationsPage