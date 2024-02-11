import React, { useEffect, useState } from 'react'
import './HeaderFromContact.scss'
import ContactHeader from '../../../../image/ContactHeader.webp'
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function HeaderFromContact() {
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
            <div className='headerFromContact' style={{ backgroundImage: `url(${item.headerfromContact})` }}>
            <p>{t("Contact")}</p>
        </div>
        ))
       }
       </>

  )
}

export default HeaderFromContact

