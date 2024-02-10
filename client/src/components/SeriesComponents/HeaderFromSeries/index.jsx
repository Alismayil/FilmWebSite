import React from 'react'
import './HeaderFromSeries.scss'
import SeriesHeader from '../../../../image/SeriesHeader.webp'
import { useTranslation } from 'react-i18next';

function HeaderFromSeries() {
const { t, i18n } = useTranslation();

  return (
    <div className='headerFromSeries' style={{ backgroundImage: `url(${SeriesHeader})` }}>
    <p>{t("FilmCategorySeries")}</p>
</div>
  )
}

export default HeaderFromSeries