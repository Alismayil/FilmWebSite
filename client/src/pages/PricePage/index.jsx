import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import './PricePage.scss'
import NotMeanBox from '../../components/NotMeanBox';
import { IoMdCheckmark } from "react-icons/io";
import { MdClear } from "react-icons/md";
import HeaderFromPrice from '../../components/PriceComponents/HeaderFromPrice';
import { useTranslation } from 'react-i18next';
import Loading from '../../components/Loading';
import PayNow from '../../components/PayNow';
import axios from 'axios';
import { PriceTypeContext } from '../../context/PriceTypeContext';
import { useNavigate } from 'react-router-dom';

function PricePage({ setloading, loading }) {
  const { t, i18n } = useTranslation();
  const [price, setPrice] = useState([])
  const navigate = useNavigate();
  const { currentUser } = useContext(PriceTypeContext)

  async function getPriceData() {
    const res = await axios.get("http://localhost:3000/price")
    setPrice(res.data)
  }



  // function handleFreeType(params) {
  //   setFreeType("Free")
  //   navigate("/movies");
  // }
  useEffect(() => {
    getPriceData()
  }, [])

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

              {
                price && price.map((item) => (
                  <div className="priceCart" data-aos="zoom-out" data-aos-duration="1000">
                    {
                      item.sale ? <div className="saveBox">
                        Save {item.sale}%
                      </div> : ""
                    }
                    <div className="upBox" style={{ borderRadius: '0px' }}>
                      {item.pricetype}
                      <h2>{item.oldprice ? <p>${item.oldprice}</p> : ""} ${item.newprice} <span>/ {item.time}</span></h2>
                    </div>
                    <div className="downBox">
                      <div className='textBox'>
                        {item.plusside.map((x) => (
                          <div className="div" >
                            <IoMdCheckmark style={{ color: "var(--bg-color-1)" }} />
                            <p>{x}</p>
                          </div>
                        ))}
                      </div>
                      <div className='textBox'>
                        {item.minusside.map((x) => (
                          <div className="div" >
                            <MdClear style={{ color: "gray" }} />
                            <p>{x}</p>
                          </div>
                        ))}
                      </div>


                      <button>
                        <div className='stripeBox'>
                          <PayNow Item={item} />
                        </div>

                        {/* <p>{t("SelectPremium")}</p> */}
                        <div className="leftLine"></div>
                        <div className="rightLine"></div>
                      </button>
                    </div>
                  </div>
                ))
              }


            </div>
          </>
        )
      }
    </>
  )
}

export default PricePage

//  <div className="priceCart" data-aos="zoom-out-right" data-aos-duration="1000">
//               <div className="upBox">
//                 {t("PriceFreetext")}
//                 <h2> $0<span>/ 5 {t("TimeDay")}</span></h2>

//               </div>
//               <div className="downBox">
//                 <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceWatchMovie")}</p>
//                 <p><p><MdClear style={{ color: "gray" }} /></p>{t("PriceWatchTv")}</p>

//                 <button>
//                   <div className='stripeBox'><PayNow /></div>

//                   {/* <p>{t("SelectFree")} </p> */}
//                   <div className="leftLine"></div>
//                   <div className="rightLine"></div>
//                 </button>
//               </div>
//             </div>



//   <div className="priceCart" data-aos="zoom-out-left" data-aos-duration="1000">
//   <div className="upBox">
//     {t("PriceBasictext")}
//     <h2> $19 <span>/ 1 {t("TimeMonth")}</span></h2>
//   </div>
//   <div className="downBox">
//     <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceWatchQulaity")}</p>
//     <p><p><IoMdCheckmark style={{ color: "var(--bg-color-1)" }} /></p>{t("PriceWatchTv")}</p>
//     <p><p><MdClear style={{ color: "gray" }} /></p>{t("PriceAds")}</p>


//     <button>
//       <div className='stripeBox'><PayNow /></div>

//       {/* <p>{t("SelectBasic")}</p> */}
//       <div className="leftLine"></div>
//       <div className="rightLine"></div>
//     </button>
//   </div>
// </div>