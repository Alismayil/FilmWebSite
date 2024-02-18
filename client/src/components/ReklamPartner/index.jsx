import React, { useEffect, useState } from 'react'
import './ReklamPartner.scss'
import Countdown from '../Countdown'

function ReklamPartner() {
    const [display, setDisplay] = useState(false)
    const [showGreeting, setShowGreeting] = useState(false);

    function handleSkip() {
        setDisplay(!display)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowGreeting(true);
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []);
  return (
    <div className={`reklamPartner ${display ? "close" :""}`}>
        {
        showGreeting  && <button onClick={handleSkip} >Skip</button>
        }
        <Countdown />
    </div>
  )
}

export default ReklamPartner