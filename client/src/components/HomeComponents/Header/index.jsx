import React, { useEffect, useState } from 'react'
import './Header.scss'
import HeaderVideo from '../../../../video/header.mp4'
import NotMeanBox from '../../NotMeanBox'
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import Loading from '../../Loading';

function Header() {
  const { t, i18n } = useTranslation();
  const [header, setHeader] = useState([])


  async function getHeaderData() {
    const res = await axios.get("http://localhost:3000/header")
    setHeader(res.data)
  }

  useEffect(() => {
    getHeaderData()
  }, [])
  return (
  <>

<header>
  {
    
      header &&  header.map((item)=>(
          <video src={item.video} autoPlay muted loop ></video>
    
        ))
    
  }
  
    <div className="textBox">
    <div data-aos="zoom-in-up"  data-aos-duration="3000"  >
    <p>{t("Header")}</p>
    </div>
     </div>
    <div className="leftTextBox">
      <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/06/h1-slider-layer-2.png" alt="" />
    </div>
    <div className="rightTextBox">
      <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/06/h1-slider-layer-1.png" alt="" />
    </div>
</header>
  </>
  )
}

export default Header