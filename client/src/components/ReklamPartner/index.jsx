import React, { useContext, useEffect, useState } from 'react'
import './ReklamPartner.scss'
import Countdown from '../Countdown'
import { PriceTypeContext } from '../../context/PriceTypeContext';

function ReklamPartner() {
  const [display, setDisplay] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false);
  const { choosePriceType } = useContext(PriceTypeContext)

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
    <div className={`reklamPartner ${display ? "close" : ""}`}>

      {
        choosePriceType === "Basic" ?
          <>
            {
              showGreeting && <button onClick={handleSkip} >Skip</button>
            }
          </>
          : ""
      }

      <Countdown />
    </div>
  )
}

export default ReklamPartner