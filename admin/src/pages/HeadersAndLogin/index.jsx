import React from 'react'
import './HeadersAndLogin.scss'
import NotMeanBox from '../../Components/NotMeanBox'
import HeadersAdmin from '../../Components/HeaderAndLoginComponents/HeadersAdmin'
import LoginAdmin from '../../Components/HeaderAndLoginComponents/LoginAdmin'

function HeadersAndLogin() {
 
  return (
      <div style={{ display: 'flex' }}>
        <NotMeanBox />
    <div id="adminHeaderPage">
    <HeadersAdmin/>
     <LoginAdmin/>
    </div>
      </div>
  
  )
}

export default HeadersAndLogin
