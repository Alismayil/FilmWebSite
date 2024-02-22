import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import ChangeColorBox from '../../components/ChangeColorBox'
import BackToTopCircularText from '../../components/BackToTop'
import { Toaster } from 'react-hot-toast'
import Navbar from '../Navbar'

function MainLayOut({ setloading, loading }) {

  return (
    <>
      <BackToTopCircularText />
      {
        loading ? "" : <Navbar />
      }
      <Outlet />
      {
        loading ? "" : <Footer />
      }
    </>
  )
}

export default MainLayOut