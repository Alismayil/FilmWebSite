import React from 'react'
import './Navbar.scss'
import { useLocation, NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from 'react';
import ModeBox from '../../Components/ModeBox';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { pathname } = useLocation()
const [openNavbar, setopenNavbar] = useState(false)
const { t, i18n } = useTranslation();

function changeLang(lang) {
  i18n.changeLanguage(lang)
}

function handleOpenNavbar() {
  setopenNavbar(!openNavbar)
}
  const navLinks = [
    {
      title: `${t("Home")}`,
      path: '/home',
    },
    {
      title: `${t("About")}`,
      path: '/about',
    },
    {
      title: `${t("MovieCard")}`,
      path: '/moviecard',
    },
    {
      title: `${t("HeaderAndLogin")}`,
      path: '/headerandlogin',
    },
    {
      title: `${t("User")}`,
      path: '/user',
    }
  ]

  return (
    <nav className={`${openNavbar ? "open":""}`} >
      <ModeBox/>
      <div className={`menuBox ${openNavbar ?"hidden":""}`} onClick={handleOpenNavbar}>
      <RiMenu2Fill />
      </div>
    <div className="languageBox">
    <div className='language' onClick={()=>changeLang("az")}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png" alt="" />
      </div>
      <div className='language' onClick={()=>changeLang("en")}>
        <img src="https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg" alt="" />
      </div>
    </div>
        <ul>

     {
      navLinks && navLinks.map((link)=>(
        <li className={pathname === `${link.path}` ? "location" : ""}>
          <NavLink className='link' to={`${link.path}`}>{link.title}</NavLink>
        </li>
      ))
     }
      </ul>

    </nav>
  )
}

export default Navbar