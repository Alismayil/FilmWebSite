import React, { useContext, useEffect } from 'react'
import './OpenPlaylist.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { PlaylistContext } from '../../../context/PlaylistContext';
import { userContext } from '../../../context/UserContext';
import { MdPlaylistRemove } from "react-icons/md";

function OpenPlaylist() {
    const { t, i18n } = useTranslation();
        const { playlist, fetchAllPlaylist, handleDeletePlaylist  } = useContext(PlaylistContext)

    useEffect(() => {
        fetchAllPlaylist()
    }, [])
    
    return (
        <section id='openPlaylist'>
            <div className="backPage">
                <div class="marquee1">
                    <div>
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                    </div>
                </div>
                <div class="marquee2">
                <div>
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                    </div>
                </div>
                <div class="marquee1">
                <div>
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                    </div>
                </div>
                <div class="marquee2">
                <div>
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                        {playlist.length === 0?<p>{t("Empty")}</p>:<p>{t("WatchNow")}</p>}
                    </div>
                </div>
            </div>
            <div className="frontPage">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        386: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        901: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {
                        playlist && playlist.map((item) => (
                            
                            <SwiperSlide>
                                <div className="sliderBox">
                                    <div className="closeBtn" onClick={()=>handleDeletePlaylist(item.product._id)}>
                                    <MdPlaylistRemove />
                                    </div>
                                    <div className="imgHoverBox"></div>
                                    <img src={item.product.playlistImage} alt="" />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                    {/* <SwiperSlide>
            <div className="sliderBox">
                <div className="imgHoverBox"></div>
                <img src="https://media.newyorker.com/photos/64bc4330ef09d4a0e04cb249/master/pass/Rosen-Messi-Miami.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <div className="imgHoverBox"></div>
                <img src="https://i.pinimg.com/originals/3d/a0/b2/3da0b259ae7e456531f5e89a2545f9b3.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <div className="imgHoverBox"></div>
                <img src="https://static.printler.com/cache/8/a/6/e/b/5/8a6eb5e0d62ebcbfd202f1d01a974ce4a82df293.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <div className="imgHoverBox"></div>
                <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h7-gallery-img-2.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <div className="imgHoverBox"></div>
                <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/06/h7-gallery-img-5.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <div className="imgHoverBox"></div>
                <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h7-gallery-img-4.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <div className="imgHoverBox"></div>
                <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h7-gallery-img-3.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="sliderBox">
                <div className="imgHoverBox"></div>
                <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/h7-gallery-img-1.jpg" alt="" />
            </div>
        </SwiperSlide> */}
                </Swiper>
            </div>
        </section>
    )
}

export default OpenPlaylist