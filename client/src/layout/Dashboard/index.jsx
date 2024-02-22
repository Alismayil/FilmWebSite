import React from 'react'
import './Dashboard.scss'
import { useLocation, NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ModeBox from '../../components/ModeBox';
import { Link } from "react-router-dom";
import { IoChevronBackCircleSharp } from "react-icons/io5";

function Dashboard() {
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
      title: 'Home',
      path: '/admin',
    },
    {
      title: 'About',
      path: '/AdminAbout',
    },
    {
      title: 'Film',
      path: '/AdminFilm',
    },
    {
      title: 'Header And Login',
      path: '/AdminHeaderAndLogin',
    },
    {
      title: 'Users',
      path: '/AdminUsers',
    }
  ]

  return (
    <div id='dashBoard' className={`${openNavbar ? "open" : ""}`} >
      <ModeBox />
      <div className={`menuBox ${openNavbar ? "hidden" : ""}`} onClick={handleOpenNavbar}>
        <RiMenu2Fill />
      </div>
      <button className='getBackBtn'><Link className='link' to={"/"}>
      <IoChevronBackCircleSharp />
        </Link></button>
      <ul>

        {
          navLinks && navLinks.map((link) => (
            <li className={pathname === `${link.path}` ? "location" : ""}>
              <NavLink className='link' to={`${link.path}`}>{link.title}</NavLink>
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default Dashboard