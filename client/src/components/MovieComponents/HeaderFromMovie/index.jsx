import React, { useEffect, useState } from 'react'
import './HeaderFromMovie.scss'
import  MovieHeader from '../../../../image/MovieHeader.jpg'
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function HeaderFromMovie() {
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
                <div className='headerFromMovie' style={{ backgroundImage: `url(${item.headerfromMovie})` }}>
                <p>{t("Movies")}</p>
            </div>
            ))
           }
           </>
      
  )
}

export default HeaderFromMovie

