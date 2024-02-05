import React from 'react'
import './Header.scss'
import HeaderVideo from '../../../../video/header.mp4'
import NotMeanBox from '../../NotMeanBox'
function Header() {
  return (
  <>
    {/* <NotMeanBox/> */}

<header>
    <video src={HeaderVideo} autoPlay muted loop ></video>
    <div className="textBox"><p>Hey!</p></div>
    <div className="leftTextBox">
      <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/06/h1-slider-layer-2.png" alt="" />
    </div>
    <div className="rightTextBox">
      <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/06/h1-slider-layer-1.png" alt="" />
    </div>
</header>
  </>
  )
}

export default Header