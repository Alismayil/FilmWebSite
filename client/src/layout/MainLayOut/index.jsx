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
<Toaster  toastOptions={{
    className: '',
    style: {
    //  backgroundColor:"var(--mode-color-2)",
    //  color:"var(--bg-color-1)",

     backgroundColor:"var(--bg-color-1)",
     color:"var(--mode-color-2)",
    },
  }}
/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayOut