import React, { useContext, useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HiMiniPause } from "react-icons/hi2";
import { VscDebugStart } from "react-icons/vsc";
// import ModeBox from '../../components/ModeBox';
import FilmLogo from '../../../image/filmLogo.png'
import LanguageBox from '../../components/LanguageBox';
import { useTranslation } from 'react-i18next';
import { userContext } from '../../context/UserContext';
import { RiLogoutCircleRLine } from "react-icons/ri";

function Navbar() {
  const [openNavbar, setopenNavbar] = useState(false)
  const { pathname } = useLocation()
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t, i18n } = useTranslation();
  const { user, setUser, setToken } = useContext(userContext);
  const nav = useNavigate()

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


  function handleNavigate() {
    setUser(null)
    setToken(null)
    nav("/")
  }
  function handleOpenNavbar() {
    setopenNavbar(!openNavbar)
  }



  return (
    <nav id={pathname !== "/" ? "location" : ""} className={scrollPosition > 600 ? 'black' : ''}>
      <div className="respLanguageBox" >
        <LanguageBox />
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
                {t("Home")}
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/about'}>
                {t("About")}
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/movies'}>
                {t("Movies")}
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/price'}>
                {t("Price")}
                <div className="outline"></div>
              </NavLink>
            </li>
            <li>
              <NavLink className='navlink' to={'/contact'}>
                {t("Contact")}
                <div className="outline"></div>
              </NavLink>
            </li>
            {
              user ? <li>
                <NavLink className='navlink' to={'/playlist'}>
                  {t("Playlist")}
                  <div className="outline"></div>
                </NavLink>
              </li> : <></>
            }

          </ul>
        </div>
      </div>
      <div className="navbarRightBox">
        <div className="languageBox">
          <LanguageBox />
        </div>
        {user ? <button className='logOut' onClick={() => handleNavigate()}><RiLogoutCircleRLine /></button> :
          <div className="logInBox">
            <Link className='link' to={'/login'}>
              <button><p>{t("LoginBtn")}</p>
                <div className="frontBox"></div>
              </button>
            </Link>
          </div>

        }
      </div>
      <div className="menuBox" onClick={handleOpenNavbar}>
        {openNavbar ? <HiMiniPause /> : <VscDebugStart />}
      </div>
      <div className={`respNavbar ${openNavbar ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink className='navlink' to={'/'}>
              {t("Home")}
              <div className="outline"></div>
            </NavLink>
          </li>
          <li>
            <NavLink className='navlink' to={'/about'}>
              {t("About")}
              <div className="outline"></div>
            </NavLink>
          </li>
          <li>
            <NavLink className='navlink' to={'/movies'}>
              {t("Movies")}
              <div className="outline"></div>
            </NavLink>
          </li>
          <li>
            <NavLink className='navlink' to={'/price'}>
              {t("Price")}
              <div className="outline"></div>
            </NavLink>
          </li>
          <li>
            <NavLink className='navlink' to={'/contact'}>
              {t("Contact")}
              <div className="outline"></div>
            </NavLink>
          </li>
          {
            user ? <li>
              <NavLink className='navlink' to={'/playlist'}>
                {t("Playlist")}
                <div className="outline"></div>
              </NavLink>
            </li> : <></>
          }

        </ul>
        {user ? <button className='logOut' onClick={() => setUser(null)}><RiLogoutCircleRLine /></button> :
          <div className="logInBox">
            <Link className='link' to={'/login'}>
              <button><p>{t("LoginBtn")}</p>
                <div className="frontBox"></div>
              </button>
            </Link>
          </div>

        }
      </div>
    </nav>
  )
}

export default Navbar