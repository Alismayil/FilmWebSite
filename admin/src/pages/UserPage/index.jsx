import React from 'react'
import './UserPage.scss'
import NotMeanBox from '../../Components/NotMeanBox'
import UserComponents from '../../Components/UserComponents'

function UserPage() {
  return (
    <div style={{display:'flex'}}>
    <NotMeanBox/>
    <div id="adminUserPage">
      <UserComponents/>
      </div>
    </div>
  )
}

export default UserPage