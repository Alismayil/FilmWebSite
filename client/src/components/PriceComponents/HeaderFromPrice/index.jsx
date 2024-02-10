import React from 'react'
import './HeaderFromPrice.scss'
import PriceHeader from '../../../../image/PriceHeader.jpg'
import { useTranslation } from 'react-i18next';

function HeaderFromPrice() {
  const { t, i18n } = useTranslation();

  return (
    <div className='headerFromPrice' style={{ backgroundImage: `url(${PriceHeader})` }}>
    <p>{t("Price")}</p>
</div>
  )
}

export default HeaderFromPrice