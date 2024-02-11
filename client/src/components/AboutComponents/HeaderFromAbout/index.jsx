import React, { useEffect, useState } from 'react'
import './HeaderFromAbout.scss'
import { useTranslation } from 'react-i18next';
import axios from 'axios'

function HeaderFromAbout() {
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
            <div className='headerFromAbout' style={{ backgroundImage: `url(${item.headerfromAbout})` }}>
            <p>{t("AboutHeader")}</p>
        </div>
        ))
       }
       </>
    )
}

export default HeaderFromAbout