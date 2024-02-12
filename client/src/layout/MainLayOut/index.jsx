import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import ModeBox from '../../components/ModeBox'
import ChangeColorBox from '../../components/ChangeColorBox'
import BackToTopCircularText from '../../components/BackToTop'
import { Toaster } from 'react-hot-toast'

function MainLayOut() {
  return (
    <>
<BackToTopCircularText/>
<Toaster/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayOut