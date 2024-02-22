import React from 'react'
import './UserPageAdmin.scss'
import NotMeanBoxPart2 from '../../components/NotMeanBoxPart2'
import Dashboard from '../../layout/Dashboard'
import UserComponents from '../../components/UserComponents'
// import NotMeanBox from '../../Components/NotMeanBox'

function UserPageAdmin() {
  return (
    <div style={{ display: 'flex' }}>
      <NotMeanBoxPart2 />
      <div id="adminUserPage">
        <Dashboard />
        <UserComponents />
      </div>
    </div>
  )
}

export default UserPageAdmin