import React from 'react'
import {Helmet} from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromContact from '../../components/ContactComponents/HeaderFromContact';

function ContactPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact</title>
    </Helmet>
<HeaderFromContact/>
  </>
  )
}

export default ContactPage