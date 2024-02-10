import React from 'react'
import './OpenContact.scss'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function OpenContact() {
  const { t, i18n } = useTranslation();

  return (
    <section id='openContact'>
<div className="leftBox">
<h1>{t("ContactHeaderText")}</h1>
<p>{t("ContactMainText")}</p>
<ul>
            <Link to={'https://www.facebook.com/'} className='link'>
             <li>
            FB.
              <div className="line"></div>
            </li>
            </Link>
            <Link to={'https://vimeo.com/'} className='link'>
             <li>
             VI.
              <div className="line"></div>
            </li>
            </Link>
            <Link to={'https://www.youtube.com/'} className='link'>
             <li>
             YT.
              <div className="line"></div>
            </li>
            </Link>
            <Link to={'https://www.instagram.com/'} className='link'>
             <li>
             IN.
              <div className="line"></div>
            </li>
            </Link>
          </ul>
</div>
<div className="rightBox">
    <form action="">
        <div className="upBox">
            <input type="text" placeholder={`${t("Name")}`} />
            <input type="text" placeholder={`${t("Email")}`} />
        </div>
        <input type="text" placeholder={`${t("Message")}`} />
<button><p>{t("ContactBtn")}</p><div className="link"></div></button>
    </form>
</div>
    </section>
  )
}

export default OpenContact