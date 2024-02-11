import React from 'react';
import { Helmet } from "react-helmet";
import FilmCatagory from '../../components/HomeComponents/FilmCatagory';
import Header from '../../components/HomeComponents/Header';
import MostPopular from '../../components/HomeComponents/MostPopular';
import ReklamPoster from '../../components/HomeComponents/ReklamPoster';

function HomePage() {

  return (
    <>
       <Helmet>
      <meta charSet="utf-8" />
      <title>Cinema Gia</title>
    </Helmet>
    <Header/> 
    {/* <p style={{backgroundColor:'green', height:"10vh"}}></p> */}

    <MostPopular/>
    <FilmCatagory/>
    <ReklamPoster/>
    {/* <p style={{backgroundColor:'green', height:"500vh"}}></p> */}
    </>
  )
}

export default HomePage