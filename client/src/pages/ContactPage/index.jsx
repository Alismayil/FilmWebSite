import React from 'react'
import {Helmet} from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromContact from '../../components/ContactComponents/HeaderFromContact';
import OpenContact from '../../components/ContactComponents/OpenContact';

function ContactPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact</title>
    </Helmet>
<HeaderFromContact/>
<OpenContact/>
  </>
  )
}

export default ContactPage