import React from 'react'
import './Footer.scss'
import { Link } from "react-router-dom";
import filmLogo from '../../../image/filmLogo.png'
function Footer() {
  return (
    <footer>
   <div className="upBox">
   <div className="textBox">
    <Link to={'/'}>
    <img src={filmLogo} alt="" />
    </Link>
        <span  >
          Lorem Ipsner gravida nibh velmlaucti eialiquetmue, aene sollic.</span>
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
        <span>
          PRODUCTION</span>
        <ul>
        <Link className='link' to={'about'}>
        <div className="lis">
            <li>
              About
              <div className="line"></div>
            </li>
            <p></p>
          </div>
        </Link>
          
       <Link to={'contact'}className='link'>
       <div className="lis">
            <li>
            Contact
              <div className="line"></div>
            </li>
            <p></p>
          </div>
       </Link>
      <Link className='link' to={'movies'}>
      <div className="lis">
            <li>
            Movies
              <div className="line"></div>
            </li>
            <p></p>
          </div>
      </Link>
          <Link to={'price'} className='link'>
          <div className="lis">
            <li>
            Price
              <div className="line"></div>
            </li>
            <p></p>
          </div>
          </Link>
          <Link className='link' to={'/*'}>
          <div className="lis">
            <li>
             Error
              <div className="line"></div>
            </li>
            <p></p>
          </div>
          </Link>
          

        </ul>
      </div>
      <div className="textBox">
        <Link to={'login'} className='link'>
        <span>
        SIGN UP
</span>
</Link>
        <span >Register for convenient use of our site</span>
      </div>
   </div>
     <div className="downBox">
     The "First Frame" website was created in © 2024 by Ali.Ismayıl_
     </div>
    </footer>
  )
}

export default Footer