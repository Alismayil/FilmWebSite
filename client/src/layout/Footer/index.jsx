import React from 'react'
import './Footer.scss'
import { Link } from "react-router-dom";
import filmLogo from '../../../image/filmLogo.png'
import { useTranslation } from 'react-i18next';
function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer>
   <div className="upBox">
   <div className="textBox">
    <Link to={'/'}>
    <img src={filmLogo} alt="" />
    </Link>
        <span  >
        {t("FooterSocialMediaText")}
</span>
        <div className="socialMediaBox">
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
      </div>
      <div className="textBox">
        <h1>
        {t("FooterProductionText")}
          </h1>
        <ul>
        <Link className='link' to={'about'}>
        <div className="lis">
            <li>
              {t("About")}
              <div className="line"></div>
            </li>
            <p></p>
          </div>
        </Link>
          
       <Link to={'contact'}className='link'>
       <div className="lis">
            <li>
            {t("Contact")}
              <div className="line"></div>
            </li>
            <p></p>
          </div>
       </Link>
      <Link className='link' to={'movies'}>
      <div className="lis">
            <li>
            {t("Movies")}
              <div className="line"></div>
            </li>
            <p></p>
          </div>
      </Link>
          <Link to={'price'} className='link'>
          <div className="lis">
            <li>
            {t("Price")}
              <div className="line"></div>
            </li>
            <p></p>
          </div>
          </Link>
          <Link className='link' to={'/*'}>
          <div className="lis">
            <li>
            {t("Error")}
              <div className="line"></div>
            </li>
            <p></p>
          </div>
          </Link>
          

        </ul>
      </div>
      <div className="textBox">
        <Link to={'login'} className='link'>
        <h1>
        {t("FooterSigntext")}
</h1>
</Link>
        <span >
          {t("FooterLogInText")}
</span>
      </div>
   </div>
     <div className="downBox">
     {t("FooterCreatedText")}
     </div>
    </footer>
  )
}

export default Footer