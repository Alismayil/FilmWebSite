import React, { useEffect, useState } from 'react'
import './ReklamPoster.scss'
import axios from 'axios'

function ReklamPoster() {
  const [reklam, setReklam] = useState([])

  async function getReklamData() {
     const res=await axios.get("http://localhost:3000/reklam")
     setReklam(res.data)
   }

   useEffect(() => {
    getReklamData()
   }, [])

  return (
  <>
   {reklam && reklam.map((item)=>(
      <section id='reklamPoster' style={{backgroundImage: `url(${item.image})` }}>
      <div data-aos="fade-left" data-aos-duration="1000">
      <div className="textBox">
        <div className="upTextBox">
          <h1>{item.name}</h1>
          <div className="writterBox">
            <p>Writter And Directed</p>
            <p>{item.writter} / {item.time}</p>
          </div>
        </div>
        <div className="downTextBox">
          <h4>{item.studio}</h4>
          <span>directed by</span>
          <p>{item.directed}</p>
          <span>writter by</span>
          <p>{item.writter}</p>
        </div>
      </div>
      </div>
  
    </section>
    ))
   }
  </>
  )
}

export default ReklamPoster