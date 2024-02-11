import React, { useEffect, useState } from 'react'
import './HeaderFromPrice.scss'
import PriceHeader from '../../../../image/PriceHeader.jpg'
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function HeaderFromPrice() {
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
                <div className='headerFromPrice' style={{ backgroundImage: `url(${item.headerfromPrice})` }}>
                <p>{t("Price")}</p>
            </div>
            ))
           }
           </>
  
  )
}

export default HeaderFromPrice

