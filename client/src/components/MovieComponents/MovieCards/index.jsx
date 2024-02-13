import React, { useContext, useEffect, useState } from 'react'
import './MovieCards.scss'
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip, Autoplay } from 'swiper/modules';
import { MdPlaylistAdd } from "react-icons/md";
import { MdOutlineChangeCircle } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";

import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import useLocalStorage from '../../../hook/LocalStorage/useLocalStorage';
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import { userContext } from '../../../context/UserContext';

function MovieCards() {
    const [openFiltertextBox, setopenFiltertextBox] = useState(false)
    const [changeTwoGrid, setChangeTwoGrid] = useLocalStorage()
    const { t, i18n } = useTranslation();
  const { user, setUser } = useContext(userContext);
const [search, setSearch] = useState('')
const [movieCard, setMovieCard] = useState([])

async function getMoviCartData() {
    const res=await axios.get('http://localhost:3000/moviecart')
    setMovieCard(res.data)
}
    function handleChangeTwogrid() {
        setChangeTwoGrid(!changeTwoGrid)
    }

    function convertMinuteToHour(minute) {
        const hour = Math.floor(minute / 60);
        const remainingMinute = minute % 60;
        return `${hour} ${t("Hour")} ${remainingMinute} ${t("Minute")} `;
      }

    function handleOpenFilterBox() {
        setopenFiltertextBox(!openFiltertextBox)
    }
useEffect(() => {
    getMoviCartData()
}, [])

    return (
        <section id='movieCards'>
            <div className="upBox">
                <div className="searchAndFilterBox">
                    <div className="filterBox" onClick={handleOpenFilterBox}>
                        <IoFilterSharp />
                    </div>
                    <div className="searchBox">
                        <input type="text" placeholder={`${t("Search")}`} onChange={(e)=>setSearch(e.target.value)} />
                        <IoMdSearch />
                    </div>
                </div>
                <div className="menuBox">
                    <div className="twoBoxMenu" onClick={handleChangeTwogrid}>
                      {changeTwoGrid ? <p>{t("Big")}</p> : <p>{t("Small")}</p>}
                    </div>
                </div>
            </div>
            <div className={`middleBox ${openFiltertextBox ? 'open' : ''}`}>
                <div className="filterTextBox">
                    <div className="movieTypeBox">
                        <form action="">
                            <input type="checkbox" id="seriesCheckbox" />
                            <label for="seriesCheckbox">{t("FilmCategorySeries")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="filmCheckbox" />
                            <label for="filmCheckbox">{t("FilmCategoryAnimations")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="animationCheckbox" />
                            <label for="animationCheckbox">{t("FilmCategoryFilms")}</label>
                        </form>
                    </div>
                    <div className="filmTypeBox">
                        <form action="">
                            <input type="checkbox" id="comedyCheckbox" />
                            <label for="comedyCheckbox">{t("Comedy")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="horrorCheckbox" />
                            <label for="horrorCheckbox">{t("Horror")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="actionCheckbox" />
                            <label for="actionCheckbox">{t("Action")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="dramaCheckbox" />
                            <label for="dramaCheckbox">{t("Drama")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="romanticCheckbox" />
                            <label for="romanticCheckbox">{t("Romantic")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="adventureCheckbox" />
                            <label for="adventureCheckbox">{t("Adventure")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="fantasyCheckbox" />
                            <label for="fantasyCheckbox">{t("Fantasy")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="sportsCheckbox" />
                            <label for="sportsCheckbox">{t("Sports")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="musicalCheckbox" />
                            <label for="musicalCheckbox">{t("Musical")}</label>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`downBox ${changeTwoGrid ? "twoGrid" : ""}`}>
               {
                movieCard && movieCard
                .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
                .map((item)=>(
                    <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                    className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}
                    
                >
                 
                    <SwiperSlide   >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`} >
                            <img src={item.cartposterimage} alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide>
                    <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`} style={{backgroundImage: `url(${item.moviegif})` }}>
                        <div className="frontBox" ></div>
                           <div className="text">
                           <h1>{item.name}</h1>
                            <span>{item.writter}</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>{t("Time")}: <span>{convertMinuteToHour(item.hourtime)}</span></p>
                           <Link to= {
                                user ? `/watch/${item._id}`:"/login"
                            }>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>
                           </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                ))
               }
            </div>
        </section>
    )
}

export default MovieCards