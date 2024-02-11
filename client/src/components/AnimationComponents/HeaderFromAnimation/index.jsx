import React, { useEffect, useState } from 'react'
import './HeaderFromAnimation.scss'
import AnimationHeader from '../../../../image/AnimationHeader.jpg'
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function HeaderFromAnimation() {
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
                <div className='headerFromAnimation' style={{ backgroundImage: `url(${item.headerfromAnimations})` }}>
                <p>{t("FilmCategoryAnimations")}</p>
            </div>
            ))
           }
           </>
  )
}

export default HeaderFromAnimation

