import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Errorİmage from '../../../image/ErrorImage.png';
import './ErrorPage.scss';
import Loading from '../../components/Loading';

function ErrorPage({ setloading, loading }) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)

    setloading(true)
  }, [])
  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Error</title>
            </Helmet>
            <div className="errorPage">
              <div className="filmBox">
              </div>
              <div className="upBox">
                <h1>Oops</h1>
                <p>404</p>
                <span>{t("NotFountText")}</span>
              </div>
              <img src={Errorİmage} alt="" style={{ zIndex: '4' }} />
              {/* <img src="file:///C:/Users/Lenovo/Downloads/5b45cb4fc051e602a568cd12%20(1).png" alt="" /> */}
              <div class="marquee">
                <div class="marquee__content">
                  <ul class="list-inline">
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li>{t("Error")}</li>
                    <li>{t("Error")}</li>
                  </ul>
                  <ul class="list-inline">
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li>{t("Error")}</li>
                    <li>{t("Error")}</li>
                  </ul>
                  <ul class="list-inline">
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li>{t("Error")}</li>
                    <li>{t("Error")}</li>
                  </ul>
                </div>
              </div>
              <div class="marquee2">
                <div class="marquee__content">
                  <ul class="list-inline">
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li>{t("Error")}</li>
                    <li>{t("Error")}</li>
                  </ul>
                  <ul class="list-inline">
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li>{t("Error")}</li>
                    <li>{t("Error")}</li>
                  </ul>
                  <ul class="list-inline">
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li className='firtErrorLi'>{t("Error")}</li>
                    <li>{t("Error")}</li>
                    <li>{t("Error")}</li>
                  </ul>
                </div>
              </div>
              <div className="backToMovie">
                <Link to={'movies'} className='link'><p>{t("ErrorBtn")}</p>
                  <div className="line"></div></Link>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default ErrorPage