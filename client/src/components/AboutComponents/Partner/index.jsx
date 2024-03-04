import React, { useEffect, useState } from 'react'
import './Partner.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import {HiOutlineDocumentText} from "react-icons/all";
import elebele from '../../../../image/elebele.svg'
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Partner() {
	const [partner, setPartner] = useState([])

	async function getPartnerData() {
		const res = await axios.get("http://localhost:3000/partner")
		setPartner(res.data)
	}

	useEffect(() => {
		getPartnerData()
	}, [])

	return (
		<section id='partner'>
			<div className="upSwiperBox">
				<Swiper
					slidesPerView={5}
					spaceBetween={30}
					loop={true}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						500: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						693: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						898: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1149: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
						1200: {
							slidesPerView: 5,
							spaceBetween: 50,
						},


					}}
					modules={[Autoplay]}
					className="mySwiper"
				>

					{
						partner && partner.map((partner) => (
							<SwiperSlide>
								<div className="swiperBox">
									<Link className='link'  to={partner.path1}>
										<img src={partner.image1} alt="" />
									</Link>
								</div>
							</SwiperSlide>
						))
					}
					
				</Swiper>
			</div>
			{/* <div className="downSwiperBox">
				<Swiper
					slidesPerView={5}
					spaceBetween={30}
					loop={true}
					dir="rtl"
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						500: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						693: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						898: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1149: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
						1200: {
							slidesPerView: 5,
							spaceBetween: 50,
						},


					}}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					className="mySwiper"
				>

{
						partner && partner.map((partner) => (
							<SwiperSlide>
								<div className="swiperBox">
									<Link className='link' to={partner.path2}>
										<img src={partner.image2} alt="" />
									</Link>
								</div>
							</SwiperSlide>
						))
					}

				</Swiper>
			</div> */}
		</section>
	)
}

export default Partner