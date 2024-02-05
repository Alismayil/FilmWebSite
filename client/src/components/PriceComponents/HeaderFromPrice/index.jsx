import React from 'react'
import './HeaderFromPrice.scss'
import PriceHeader from '../../../../image/PriceHeader.jpg'

function HeaderFromPrice() {
  return (
    <div className='headerFromPrice' style={{ backgroundImage: `url(${PriceHeader})` }}>
    <p>Price</p>
</div>
  )
}

export default HeaderFromPrice