import React from 'react'
import './HeaderFromSeries.scss'
import SeriesHeader from '../../../../image/SeriesHeader.webp'

function HeaderFromSeries() {
  return (
    <div className='headerFromSeries' style={{ backgroundImage: `url(${SeriesHeader})` }}>
    <p>Series</p>
</div>
  )
}

export default HeaderFromSeries