import React from 'react'
import './OpenSignIn.scss'

function OpenSignIn() {
  return (
    <div className='openSignIn'>
        <h1> Welcome Admin</h1>
        <form action="">
           
            <input type="text" placeholder='UserName...' />
            <input type="text" placeholder='Pass...' />
            <button>Log In</button>
        </form>
    </div>
  )
}

export default OpenSignIn