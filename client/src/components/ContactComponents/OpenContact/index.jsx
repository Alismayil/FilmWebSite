import React from 'react'
import './OpenContact.scss'
import { Link } from "react-router-dom";

function OpenContact() {
  return (
    <section id='openContact'>
<div className="leftBox">
<h1>WE WOULD LOVE TO HEAR FROM YOU.</h1>
<p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit.</p>
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
            <input type="text" placeholder='Name...' />
            <input type="text" placeholder='Email...' />
        </div>
        <input type="text" placeholder='Messages...' />
<button><p>Send Message</p><div className="link"></div></button>
    </form>
</div>
    </section>
  )
}

export default OpenContact