import React from 'react'
import {Helmet} from "react-helmet";
import HeaderFromAbout from '../../components/AboutComponents/HeaderFromAbout';
import NotMeanBox from '../../components/NotMeanBox';
import Partner from '../../components/AboutComponents/Partner';
import Personals from '../../components/AboutComponents/Personals';
import InformSlide from '../../components/AboutComponents/InformSlide';
import { useLocation } from 'react-router-dom';

function AboutPage() {
  const location =useLocation()
  console.log(location.pathname);
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About</title>
    </Helmet>
    <HeaderFromAbout/>
<Partner/>
<Personals/>
<InformSlide/>
  </>
  )
}

export default AboutPage