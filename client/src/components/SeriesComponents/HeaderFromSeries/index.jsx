import React, { useEffect, useState } from 'react'
import './HeaderFromSeries.scss'
import SeriesHeader from '../../../../image/SeriesHeader.webp'
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function HeaderFromSeries() {
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
                <div className='headerFromSeries' style={{ backgroundImage: `url(${item.headerfromSeries})` }}>
                <p>{t("FilmCategorySeries")}</p>
            </div>
            ))
           }
           </>

  )
}

export default HeaderFromSeries

