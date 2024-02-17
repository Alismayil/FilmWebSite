import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import './PricePage.scss'
import NotMeanBox from '../../components/NotMeanBox';
import { IoMdCheckmark } from "react-icons/io";
import { MdClear } from "react-icons/md";
import HeaderFromPrice from '../../components/PriceComponents/HeaderFromPrice';
import { useTranslation } from 'react-i18next';
import Loading from '../../components/Loading';

function PricePage({ setloading, loading }) {
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
            <NotMeanBox />
            <Helmet>
              <meta charSet="utf-8" />
              <title>Price</title>
            </Helmet>
            <HeaderFromPrice />
            <div className="pricePage">
              <div className="priceCart" data-aos="zoom-out-right" data-aos-duration="1000">
                <div className="upBox">
                  {t("PriceFreetext")}
                  <h2> $0<span>/ 5 {t("TimeDay")}</span></h2>

                </div>
                <div className="downBox">
                  <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceWatchMovie")}</p>
                  <p><p><MdClear style={{ color: "gray" }} /></p>{t("PriceWatchTv")}</p>

                  <button>
                    <p>{t("SelectFree")}</p>
                    <div className="leftLine"></div>
                    <div className="rightLine"></div>
                  </button>
                </div>
              </div>
              <div className="priceCart" data-aos="zoom-out" data-aos-duration="1000">
                <div className="saveBox">
                  Save 20%
                </div>
                <div className="upBox" style={{ borderRadius: '0px' }}>
                  {t("PricePremiumtext")}
                  <h2><p>$49</p> $39 <span>/ 3 {t("TimeMonth")}</span></h2>
                </div>
                <div className="downBox">
                  <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceWatchQulaity")}</p>
                  <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceWatchTv")}</p>
                  <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceNonStop")}</p>
                  <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceAds")}</p>

                  <button>
                    <p>{t("SelectPremium")}</p>
                    <div className="leftLine"></div>
                    <div className="rightLine"></div>
                  </button>
                </div>
              </div>
              <div className="priceCart" data-aos="zoom-out-left" data-aos-duration="1000">
                <div className="upBox">
                  {t("PriceBasictext")}
                  <h2> $19 <span>/ 1 {t("TimeMonth")}</span></h2>
                </div>
                <div className="downBox">
                  <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceWatchQulaity")}</p>
                  <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceWatchTv")}</p>
                  <p><p><MdClear style={{ color: "gray" }} /></p>{t("PriceAds")}</p>


                  <button>
                    <p>{t("SelectBasic")}</p>
                    <div className="leftLine"></div>
                    <div className="rightLine"></div>
                  </button>
                </div>
              </div>

            </div>
          </>
        )
      }
    </>
  )
}

export default PricePage