import React from 'react'
import './HeaderFromContact.scss'
import ContactHeader from '../../../../image/ContactHeader.webp'

function HeaderFromContact() {
  return (
    <div className='headerFromContact' style={{ backgroundImage: `url(${ContactHeader})` }}>
    <p>Contact</p>
</div>
  )
}

export default HeaderFromContact