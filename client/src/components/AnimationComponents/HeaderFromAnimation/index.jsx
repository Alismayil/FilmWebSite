import React from 'react'
import './HeaderFromAnimation.scss'
import AnimationHeader from '../../../../image/AnimationHeader.jpg'

function HeaderFromAnimation() {
  return (
    <div className='headerFromAnimation' style={{ backgroundImage: `url(${AnimationHeader})` }}>
    <p>Animations</p>
</div>
  )
}

export default HeaderFromAnimation