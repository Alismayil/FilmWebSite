import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiMiniPause } from "react-icons/hi2";
import { VscDebugStart } from "react-icons/vsc";
import ModeBox from '../../components/ModeBox';
import FilmLogo from '../../../image/filmLogo.png'
import LanguageBox from '../../components/LanguageBox';
function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false)
  const {pathname} =useLocation()
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleOpenNavbar() {
    setopenNavbar(!openNavbar)
  }

 

  return (
    <nav id={pathname !== "/" ? "location" : ""} className={scrollPosition > 600  ? 'black' : ''}>
      <div className="respLanguageBox">
        <select name="" id="">
          <option value="">Az</option>
          <option value="">En</option>
          <option value="">Ru</option>
        </select>
      </div>
      <div className="navbarLeftBox">
        <Link to={'/'}>
        <div className="iconBox">
          <img src={FilmLogo} alt="" />
        </div>
        </Link>
        <div className="textBox">
          <ul>
            <li>
              <NavLink className='navlink' to={'/'}>
                Home
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/about'}>
                About
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/movies'}>
              Movies
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/price'}>
              Price
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/contact'}>
                Contact
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/playlist'}>
              Playlist
                <div className="outline"></div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbarRightBox">
        <div className="languageBox">
          <LanguageBox/>
        </div>
        <div className="logInBox">
          <Link className='link' to={'/login'}>
            <button><p>Log In</p>
            <div className="frontBox"></div>
            </button>
          </Link>
        </div>
      </div>
      <div className="menuBox" onClick={handleOpenNavbar}>
        {openNavbar ? <HiMiniPause /> : <VscDebugStart />}
      </div>
      <div className={`respNavbar ${openNavbar ? 'open' : ''}`}>
      <ul>
            <li>
              <NavLink className='navlink' to={'/'}>
                Home
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/about'}>
                About
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/movies'}>
              Movies
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/price'}>
              Price
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/contact'}>
                Contact
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/playlist'}>
              Playlist
                <div className="outline"></div>
              </NavLink>
            </li>
          </ul>
          <div className="logInBox">
          <Link className='link' to={'/login'}>
            <button>Log In</button>
          </Link>
        </div>
      
      </div>
    </nav>
  )
}

export default Navbar