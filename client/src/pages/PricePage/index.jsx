import React from 'react'
import {Helmet} from "react-helmet";
import './PricePage.scss'
import NotMeanBox from '../../components/NotMeanBox';
import { IoMdCheckmark } from "react-icons/io";
import { MdClear } from "react-icons/md";
import HeaderFromPrice from '../../components/PriceComponents/HeaderFromPrice';

function PricePage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Price</title>
    </Helmet>
    <HeaderFromPrice/>
<div className="pricePage">
  <div className="priceCart">
    <div className="upBox">
    Free
    <h2> $0<span>/ 5 days</span></h2>

    </div>
    <div className="downBox">
    <p><p><IoMdCheckmark style={{color:"var(--bg-color-1)"}} /></p>Watch movies</p>
   <p><p><MdClear style={{color:"gray"}} /></p>Watch on TV or Laptop</p>
    
    <button>
      <p>Select Free</p>
      <div className="leftLine"></div>
      <div className="rightLine"></div>
      </button>
    </div>
  </div>
  <div className="priceCart">
    <div className="saveBox">
      Save 20%
    </div>
    <div className="upBox" style={{borderRadius:'0px'}}>
    Premium
    <h2><p>$49</p> $39 <span>/ 3 Month</span></h2>
    </div>
    <div className="downBox">
   <p><p><IoMdCheckmark style={{color:"var(--bg-color-1)"}} /></p>Watch movies in high quality</p>
   <p><p><IoMdCheckmark style={{color:"var(--bg-color-1)"}}  /></p>Watch on TV or Laptop</p>
   <p><p><IoMdCheckmark style={{color:"var(--bg-color-1)"}}  /></p>Non-stop tracking</p>
   <p><p><IoMdCheckmark style={{color:"var(--bg-color-1)"}}  /></p>Watch without ads</p>
    
    <button>
      <p>Select Premium</p>
      <div className="leftLine"></div>
      <div className="rightLine"></div>
      </button>
    </div>
  </div>
  <div className="priceCart">
    <div className="upBox">
    Basic
    <h2> $19 <span>/ 1 Month</span></h2>
    </div>
    <div className="downBox">
    <p><p><IoMdCheckmark style={{color:"var(--bg-color-1)"}} /></p>Watch movies in high quality</p>
   <p><p><IoMdCheckmark style={{color:"var(--bg-color-1)"}}  /></p>Watch on TV or Laptop</p>
   <p><p><MdClear style={{color:"gray"}} /></p>Watch without ads</p>
   
    
    <button>
      <p>Select Basic</p>
      <div className="leftLine"></div>
      <div className="rightLine"></div>
      </button>
    </div>
  </div>
  
</div>
  </>
  )
}

export default PricePage