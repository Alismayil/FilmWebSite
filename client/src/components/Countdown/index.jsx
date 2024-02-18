import React, { useState, useEffect } from 'react';
import './Countdown.scss'

function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? 10 : prevCount - 1));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="countBox">
      <div className="countdown-box">{count}</div>
    </div>
  );
}

export default Countdown;

