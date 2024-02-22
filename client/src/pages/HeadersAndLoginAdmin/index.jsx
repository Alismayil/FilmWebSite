import React from 'react'
import './HeadersAndLoginAdmin.scss'
import NotMeanBoxPart2 from '../../components/NotMeanBoxPart2'
import Dashboard from '../../layout/Dashboard'
import HeadersAdmin from '../../components/HeaderAndLoginComponents/HeadersAdmin'
import LoginAdmin from '../../components/HeaderAndLoginComponents/LoginAdmin'

// import NotMeanBox from '../../Components/NotMeanBox'
// import HeadersAdmin from '../../Components/HeaderAndLoginComponents/HeadersAdmin'
// import LoginAdmin from '../../Components/HeaderAndLoginComponents/LoginAdmin'

function HeadersAndLoginAdmin() {

  return (
    <div style={{ display: 'flex' }}>
      <NotMeanBoxPart2 />
      <div id="adminHeaderPage">
      <Dashboard/>
        <HeadersAdmin />
        <LoginAdmin/>
      </div>
    </div>

  )
}

export default HeadersAndLoginAdmin
