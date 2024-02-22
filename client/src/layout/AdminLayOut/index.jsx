import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
// import ModeBox from '../../components/ModeBox'
// import ChangeColorBox from '../../components/ChangeColorBox'
import BackToTopCircularText from '../../components/BackToTop'
import { Toaster } from 'react-hot-toast'
import Dashboard from '../../../../admin/src/layout/Dashboard'

function AdminLayOut({ setloading, loading }) {

  return (
    <>
      {/* <BackToTopCircularText /> */}
      {/* <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            backgroundColor: "var(--bg-color-1)",
            color: "var(--mode-color-2)",
          },
        }}
      /> */}
    {/* <Dashboard/>
      <Outlet /> */}
   
    </>
  )
}

export default AdminLayOut