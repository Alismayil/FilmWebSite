import React from 'react'
import './HeaderFromAbout.scss'
import AboutHeader from '../../../../image/AboutHeader.jpg'
import { useTranslation } from 'react-i18next';

function HeaderFromAbout() {
  const { t, i18n } = useTranslation();

    return (
        <div className='headerFromAbout' style={{ backgroundImage: `url(${AboutHeader})` }}>
            <p>{t("AboutHeader")}</p>
        </div>
    )
}

export default HeaderFromAbout