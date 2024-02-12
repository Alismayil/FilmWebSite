import React, { useContext, useState } from 'react'
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
import { userContext } from '../../../context/UserContext';


function MovieCards() {
    const [openFiltertextBox, setopenFiltertextBox] = useState(false)
    const [changeTwoGrid, setChangeTwoGrid] = useLocalStorage()
    const { t, i18n } = useTranslation();
    const { user, setUser } = useContext(userContext);

    function handleChangeTwogrid() {
        setChangeTwoGrid(!changeTwoGrid)
    }


    function handleOpenFilterBox() {
        setopenFiltertextBox(!openFiltertextBox)
    }

    return (
        <section id='movieCards'>
            <div className="upBox">
                <div className="searchAndFilterBox">
                    <div className="filterBox" onClick={handleOpenFilterBox}>
                        <IoFilterSharp />
                    </div>
                    <div className="searchBox">
                        <input type="text" placeholder={`${t("Search")}`} />
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
                {/* <div className='downBox'> */}
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                    className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}
                    
                >
                 
                    <SwiperSlide   >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`} >
                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide>
                    <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`} style={{backgroundImage: `url(https://i.pinimg.com/originals/eb/0f/8c/eb0f8c3e2e1a8e1508f3afa2c86ad51f.gif)` }}>
                        <div className="frontBox" ></div>
                           <div className="text">
                           <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                          
                           <Link 
                           to={
                                user ?"/watch":"/login" 
                            }
                           >
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
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide>
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    loop={true}
                    // autoplay={{
                    //     delay: 1500,
                    //     disableOnInteraction: false,
                    // }}
                    speed={900}
                    modules={[EffectFlip, Autoplay]}
                                        className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}

                >
                   <SwiperSlide >
                        <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`}>

                            <img src="https://artofthemovies.co.uk/cdn/shop/products/IMG_2690-973702.jpg?v=1686847908" alt="" />
                            <div className="changeBox">
                                <MdOutlineChangeCircle />
                            </div>
                        </div>

                    </SwiperSlide>
                   <SwiperSlide   className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`} >
                         <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`}>
                            <h1>Inceriodsaasaaadsascacascsan</h1>
                            <span>Leanotda daoapinvni</span>
                            <h2>Category    /<p>drama</p></h2>
                            <p>Hour : <span>0202</span></p>
                           <Link to={'/watch'}>
                            <div className="playBtn">                           
                                <FaPlay />
                            </div>                           
                           </Link>
                            <div className="playlistBox">
                                <MdPlaylistAdd />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    )
}

export default MovieCards