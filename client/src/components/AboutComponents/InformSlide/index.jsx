import React, { useEffect, useState } from 'react'
import './InformSlide.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios'

function InformSlide() {
  const [inform, setInform] = useState([])

  async function getInformData() {
    const res = await axios.get("http://localhost:3000/aboutinformsection")
    setInform(res.data)
  }

  useEffect(() => {
    getInformData()
  }, [])
  return (
    <section id='informSlide'>
      
            <div className="leftBox">
{
        inform && inform.map((item) => (
              <img src={item.image} alt="" />
          ))
      }      
            </div>
      
            <div className="rightBox">
              <div className="left">"</div>
              <div className="right">
                <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h4-testimonials-img-5.png" alt="" className='signatureBox' />
                <Swiper
                  direction={'vertical'}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}

                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {
                    inform && inform.map((item)=>(
                      <SwiperSlide>
                    <div className="sliderBox">
                      <h1>{item.comment}</h1>
                      <p>{item.says} / {item.job}</p>
                    </div>
                  </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
            </div>
           
    </section>
  )
}

export default InformSlide