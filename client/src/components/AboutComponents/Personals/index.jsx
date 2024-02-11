import React, { useEffect, useState } from 'react'
import './Personals.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Personals() {
    const [personal, setPersonal] = useState([])

    async function getPersonalData() {
       const res=await axios.get("http://localhost:3000/personal")
       setPersonal(res.data)
     }
  
     useEffect(() => {
      getPersonalData()
     }, [])
    return (
        <section id='personals'>
           {
            personal && personal.map((item)=>(
                <div className="cartBox" data-aos="zoom-in-down">
                <div className="imgBox">
                    <img src={item.image} alt="" />
                    <div className="imgHoverBox"></div>
                    <div className="linkBox">
                    <ul>
                        <Link className='link' to={'https://www.facebook.com/'} >
                            <div className="lis">
                                <li>
                                    FB.
                                    <div className="line"></div>
                                </li>
                                <p></p>
                            </div>
                        </Link>
                        <Link className='link' to={'https://vimeo.com/'} >
                            <div className="lis">
                                <li>
                                    VI.
                                    <div className="line"></div>
                                </li>
                                <p></p>
                            </div>
                        </Link>
                        <Link className='link' to={'https://www.youtube.com/'} >
                            <div className="lis">
                                <li>
                                    YT.
                                    <div className="line"></div>
                                </li>
                                <p></p>
                            </div>
                        </Link>
                        <Link className='link' to={'https://www.instagram.com/'} >
                            <div className="lis">
                                <li>
                                    IN.
                                    <div className="line"></div>
                                </li>
                                <p></p>
                            </div>
                        </Link>
   
                    </ul>
                </div>
                </div>
                
                <div className="textBox">
                    <h2>{item.name}</h2>
                    <p>{item.job}</p>
                </div>
            </div>
            ))
           }
        </section>
    )
}

export default Personals