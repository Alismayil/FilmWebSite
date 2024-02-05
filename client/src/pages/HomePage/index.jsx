import React from 'react'
import {Helmet} from "react-helmet";
import MostPopular from '../../components/HomeComponents/MostPopular';
import FilmCatagory from '../../components/HomeComponents/FilmCatagory';
import ReklamPoster from '../../components/HomeComponents/ReklamPoster';
import Header from '../../components/HomeComponents/Header';

function HomePage() {
  return (
    <>
       <Helmet>
      <meta charSet="utf-8" />
      <title>First Frame</title>
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