import React, { useEffect, useState } from 'react'
import './HeaderFromFilm.scss'
import FilmHeader from '../../../../image/FilmHeader.jpeg'
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function HeaderFromFilm() {
const { t, i18n } = useTranslation();
const [header, setHeader] = useState([])

  async function getHeaderData() {
    const res = await axios.get("http://localhost:3000/headerandlogin")
    setHeader(res.data)
  }

  useEffect(() => {
    getHeaderData()
  }, [])

  return (
    <>
           {
            header && header.map((item)=>(
                <div className='headerFromFilm' style={{ backgroundImage: `url(${item.headerfromFilms})` }}>
                <p>{t("FilmCategoryFilms")}</p>
            </div>
            ))
           }
           </>
 
  )
}

export default HeaderFromFilm

