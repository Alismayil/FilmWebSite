import React, { useContext, useEffect, useState } from 'react'
import './OpenPlaylist.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { PlaylistContext } from '../../../context/PlaylistContext';
import { userContext } from '../../../context/UserContext';
import { MdPlaylistRemove } from "react-icons/md";
import { Link } from 'react-router-dom';

function OpenPlaylist() {
    const { t, i18n } = useTranslation();
    const { playlist, fetchAllPlaylist, handleDeletePlaylist } = useContext(PlaylistContext)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const mediaWidth = windowWidth <= 569 ? "70vw" : '28vw'

    useEffect(() => {
        fetchAllPlaylist()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <section id='openPlaylist'>
            <div className="backPage">
                <div class="marquee1">
                    <div>
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                    </div>
                </div>
                <div class="marquee2">
                    <div>
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                    </div>
                </div>
                <div class="marquee1">
                    <div>
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                    </div>
                </div>
                <div class="marquee2">
                    <div>
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                        {playlist.length === 0 ? <p>{t("Empty")}</p> : <p>{t("WatchNow")}</p>}
                    </div>
                </div>
            </div>
            <div className="frontPage">

                <Swiper
                    style={playlist.length === 1 ? { width: '30vw', width: mediaWidth }
                        : playlist.length === 2 ? { width: '65vw' } : playlist.length === 3 ? { width: '95vw' } : { width: '110vw' }}
                    slidesPerView={playlist.length === 1 ? 1 : playlist.length === 2 ? 2 : playlist.length === 3 ? 3 : 4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}

                    breakpoints={playlist.length === 1 ?
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            386: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            901: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                        }
                        : playlist.length === 2 ?
                            {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                386: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                901: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                            }
                            : playlist.length === 3 ?
                                {
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    386: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    901: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }
                                :
                                {
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
                                }
                    }

                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {
                        playlist && playlist.map((item) => (

                            <SwiperSlide>
                                <div className="sliderBox">
                                    <div className="closeBtn" onClick={() => handleDeletePlaylist(item.product._id)}>
                                        <MdPlaylistRemove />
                                    </div>
                                    <div className="imgHoverBox"></div>
                                    <div className="imgBox">
                                        <Link to={`/watch/${item.product._id}`}>
                                            <img src={item.product.playlistImage} alt="" />
                                        </Link>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default OpenPlaylist