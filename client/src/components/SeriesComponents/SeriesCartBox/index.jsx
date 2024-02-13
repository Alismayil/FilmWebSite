

import React, { useContext, useEffect, useState } from 'react';
import './SeriesCartBox.scss'
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
import axios from 'axios';
import { userContext } from '../../../context/UserContext';

function SeriesCartBox() {
    const [openFiltertextBox, setOpenFilterTextBox] = useState(false);
    const [changeTwoGrid, setChangeTwoGrid] = useLocalStorage();
    const { t } = useTranslation();
    const { user } = useContext(userContext);
    const [search, setSearch] = useState('');
    const [movieCard, setMovieCard] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [filterCategory, setFilterCategory] = useState("All");

    async function getMovieCardData() {
        try {
            const res = await axios.get('http://localhost:3000/moviecart');
            setMovieCard(res.data);
        } catch (error) {
            console.error("Error fetching movie card data:", error);
        }
    }

    function handleChangeTwoGrid() {
        setChangeTwoGrid(!changeTwoGrid);
    }

    function convertMinuteToHour(minute) {
        const hour = Math.floor(minute / 60);
        const remainingMinute = minute % 60;
        return `${hour} ${t("Hour")} ${remainingMinute} ${t("Minute")}`;
    }

    function handleOpenFilterBox() {
        setOpenFilterTextBox(!openFiltertextBox);
    }

    useEffect(() => {
        getMovieCardData();
    }, []);

    const handleCategoryFilter = (e) => {
        const selectedValue = e.target.value;

        if (!filterData.includes(selectedValue)) {
            setFilterData([...filterData, selectedValue]);
            setFilterCategory(selectedValue);
        } else {
            const updatedFilterData = filterData.filter((x) => x !== selectedValue);
            setFilterData(updatedFilterData);

            if (updatedFilterData.length === 0) {
                setFilterCategory("All");
            } else {
                setFilterCategory(updatedFilterData[updatedFilterData.length - 1]);
            }
        }
    };

    return (
        <section id='seriesCartBox'>
            <div className="upBox">
                <div className="searchAndFilterBox">
                    <div className="filterBox" onClick={handleOpenFilterBox}>
                        <IoFilterSharp />
                    </div>
                    <div className="searchBox">
                        <input type="text" placeholder={`${t("Search")}`} onChange={(e) => setSearch(e.target.value)} />
                        <IoMdSearch />
                    </div>
                </div>
                <div className="menuBox">
                    <div className="twoBoxMenu" onClick={handleChangeTwoGrid}>
                        {changeTwoGrid ? <p>{t("Big")}</p> : <p>{t("Small")}</p>}
                    </div>
                </div>
            </div>
            
            <div className={`middleBox ${openFiltertextBox ? 'open' : ''}`}>
                <div className="filterTextBox">
                    <div className="filmTypeBox">
                        <form action="">
                            <input type="checkbox" id="comedyCheckbox" />
                            <label htmlFor="comedyCheckbox">{t("Comedy")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="horrorCheckbox" />
                            <label htmlFor="horrorCheckbox">{t("Horror")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="actionCheckbox" />
                            <label htmlFor="actionCheckbox">{t("Action")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="dramaCheckbox" />
                            <label htmlFor="dramaCheckbox">{t("Drama")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="romanticCheckbox" />
                            <label htmlFor="romanticCheckbox">{t("Romantic")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="adventureCheckbox" />
                            <label htmlFor="adventureCheckbox">{t("Adventure")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="fantasyCheckbox" />
                            <label htmlFor="fantasyCheckbox">{t("Fantasy")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="sportsCheckbox" />
                            <label htmlFor="sportsCheckbox">{t("Sports")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="musicalCheckbox" />
                            <label htmlFor="musicalCheckbox">{t("Musical")}</label>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`downBox ${changeTwoGrid ? "twoGrid" : ""}`}>
                {movieCard && movieCard
                    .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                    .filter((item) => filterCategory === "All" || filterData.includes(item.movietype))
                    .map((item) => (
                        <>
                        {item.movietype=== "Series" ?
                        <>
<Swiper
                            effect={'flip'}
                            grabCursor={true}
                            loop={true}
                            speed={900}
                            modules={[EffectFlip, Autoplay]}
                            className={`mySwiper ${changeTwoGrid ? 'changeSwiper' : ""}`}
                            key={item._id}
                        >
                            <SwiperSlide>
                                <div data-aos="flip-left" className={`posterBox ${changeTwoGrid ? 'twoGridWidthPoster' : ""}`} >
                                    <img src={item.cartposterimage} alt="" />
                                    <div className="changeBox">
                                        <MdOutlineChangeCircle />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`textBox ${changeTwoGrid ? 'twoGridWidthText' : ""}`} style={{ backgroundImage: `url(${item.moviegif})` }}>
                                    <div className="frontBox"></div>
                                    <div className="text">
                                        <h1>{item.name}</h1>
                                        <span>{item.writter}</span>
                                        <p>{t("Time")}: <span>{convertMinuteToHour(item.hourtime)}</span></p>
                                        <Link to={user ? `/watch/${item._id}` : "/login"}>
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


                        </>
                        
                        :""}
                        </>
                    ))
                }
            </div>
        </section>
    );
}

export default SeriesCartBox;
