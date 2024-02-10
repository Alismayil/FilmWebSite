import React from 'react'
import './HeaderFromMovie.scss'
import  MovieHeader from '../../../../image/MovieHeader.jpg'
import { useTranslation } from 'react-i18next';

function HeaderFromMovie() {
  const { t, i18n } = useTranslation();
      
  return (
         <div className='headerFromMovie' style={{ backgroundImage: `url(${MovieHeader})` }}>
            <p>{t("Movies")}</p>
        </div>
  )
}

export default HeaderFromMovie