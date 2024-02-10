import React from 'react'
import './HeaderFromFilm.scss'
import FilmHeader from '../../../../image/FilmHeader.jpeg'
import { useTranslation } from 'react-i18next';

function HeaderFromFilm() {
const { t, i18n } = useTranslation();

  return (
    <div className='headerFromFilm' style={{ backgroundImage: `url(${FilmHeader})` }}>
    <p>{t("FilmCategoryFilms")}</p>
</div>
  )
}

export default HeaderFromFilm