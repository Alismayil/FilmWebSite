import React from 'react'
import './HeaderFromContact.scss'
import ContactHeader from '../../../../image/ContactHeader.webp'
import { useTranslation } from 'react-i18next';

function HeaderFromContact() {
  const { t, i18n } = useTranslation();

  return (
    <div className='headerFromContact' style={{ backgroundImage: `url(${ContactHeader})` }}>
    <p>{t("Contact")}</p>
</div>
  )
}

export default HeaderFromContact