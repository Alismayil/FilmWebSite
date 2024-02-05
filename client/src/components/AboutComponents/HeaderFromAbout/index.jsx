import React from 'react'
import './HeaderFromAbout.scss'
import AboutHeader from '../../../../image/AboutHeader.jpg'

function HeaderFromAbout() {
    return (
        <div className='headerFromAbout' style={{ backgroundImage: `url(${AboutHeader})` }}>
            <p>ABOUT US</p>
        </div>
    )
}

export default HeaderFromAbout