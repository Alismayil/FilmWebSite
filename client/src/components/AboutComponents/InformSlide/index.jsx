import React from 'react'
import './InformSlide.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , Autoplay } from 'swiper/modules';

function InformSlide() {
  return (
    <section id='informSlide'>
        <div className="leftBox">
<img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h4-testimonials-img-1.jpg" alt="" />
<img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h4-testimonials-img-2.jpg" alt="" />
<img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h4-testimonials-img-3.jpg" alt="" />
<img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h4-testimonials-img-4.jpg" alt="" />
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
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="sliderBox">
                <h1>''Conse ctetur adipiscing elit, sed do eiusmod orem ipsum dolorit. ''</h1>
                <p>Nicolas Mour / Director</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <h1>''Conse ctetur adipiscing elit, sed do eiusmod orem ipsum dolorit. ''</h1>
                <p>Nicolas Mour / Director</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <h1>''Conse ctetur adipiscing elit, sed do eiusmod orem ipsum dolorit. ''</h1>
                <p>Nicolas Mour / Director</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <h1>''Conse ctetur adipiscing elit, sed do eiusmod orem ipsum dolorit. ''</h1>
                <p>Nicolas Mour / Director</p>
            </div>
        </SwiperSlide>
       
      </Swiper>
</div>
        </div>
    </section>
  )
}

export default InformSlide