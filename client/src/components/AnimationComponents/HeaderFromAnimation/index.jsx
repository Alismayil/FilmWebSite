import React from 'react'
import './HeaderFromAnimation.scss'
import AnimationHeader from '../../../../image/AnimationHeader.jpg'
import { useTranslation } from 'react-i18next';

function HeaderFromAnimation() {
const { t, i18n } = useTranslation();

  return (
    <div className='headerFromAnimation' style={{ backgroundImage: `url(${AnimationHeader})` }}>
    <p>{t('FilmCategoryAnimations')}</p>
</div>
  )
}

export default HeaderFromAnimation