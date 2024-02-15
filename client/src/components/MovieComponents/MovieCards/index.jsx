import React, { useContext, useEffect, useState } from 'react';
import './MovieCards.scss';
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

import { PlaylistContext } from '../../../context/PlaylistContext';


function MovieCards() {
    const [openFiltertextBox, setOpenFilterTextBox] = useState(false);
    const [changeTwoGrid, setChangeTwoGrid] = useLocalStorage();
    const { t } = useTranslation();
    const { user } = useContext(userContext);
    const [search, setSearch] = useState('');
    const [movieCard, setMovieCard] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [filterCategory, setFilterCategory] = useState("All");


    const {handleAddPlaylist}=useContext(PlaylistContext)

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

    // const filteredMovies = movies.filter(movie => {
    //     // Her bir film belgesinin kategorilerini dön
    //     for (const category of movie.categories) {
    //       // Eğer kategori 'Horror' ise true döndür ve filtreye ekle
    //       if (category.category === 'Horror') {
    //         return true;
    //       }
    //     }
    //     // Eğer kategori 'Horror' değilse false döndür ve filtreye ekleme
    //     return false;
    //   });

    // const extractCategories = (data) => {
    //     const datas= data && data.map(x => x.category);
    //     console.log("datalar:" ,datas);
    //     return datas
    //   };


    return (
        <section id='movieCards'>
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
                    <div className="movieTypeBox">
                        <form action="">
                            <input type="checkbox" id="seriesCheckbox" onClick={handleCategoryFilter} value={'Series'} />
                            <label htmlFor="seriesCheckbox">{t("FilmCategorySeries")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="filmCheckbox" onClick={handleCategoryFilter} value={'Animation'} />
                            <label htmlFor="filmCheckbox">{t("FilmCategoryAnimations")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="animationCheckbox" onClick={handleCategoryFilter} value={'Film'} />
                            <label htmlFor="animationCheckbox">{t("FilmCategoryFilms")}</label>
                        </form>
                    </div>
                    <div className="filmTypeBox">
                        <form action="">
                            <input type="checkbox" id="comedyCheckbox" />
                            <label htmlFor="comedyCheckbox">{t("Comedy")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="horrorCheckbox" onClick={handleCategoryFilter} value={'Horror'} />
                            <label htmlFor="horrorCheckbox">{t("Horror")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="actionCheckbox" onClick={handleCategoryFilter} value={'Action'} />
                            <label htmlFor="actionCheckbox">{t("Action")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="dramaCheckbox" onClick={handleCategoryFilter} value={'Drama'} />
                            <label htmlFor="dramaCheckbox">{t("Drama")}</label>
                        </form>
                        <form action="">
                            <input type="checkbox" id="romanticCheckbox" onClick={handleCategoryFilter} value={'Romantic'} />
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
                    // .filter(movie => {
                    //     for (const category of movie.categories) {
                    //         console.log("filterdata:", filterData);
                    //       if (filterData.includes(category.category)) {
                    //         return true;
                    //       }
                    //     }
                    //     return false;
                    //   })
                    .map((item) => (
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
                                        <h2>{t("Type")} / <p>{item.movietype}</p></h2>
                                        <p>{t("Time")}: <span>{convertMinuteToHour(item.hourtime)}</span></p>
                                        <Link to={user ? `/watch/${item._id}` : "/login"}>
                                            <div className="playBtn">
                                                <FaPlay />
                                            </div>
                                        </Link>
                                        <Link style={{ color: 'var(--mode-color-1)' }} to={user ? "" : "/login"}>
                                            <div className="playlistBox" onClick={() => handleAddPlaylist(item._id)}>
                                                <MdPlaylistAdd />
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    ))
                }
            </div>
        </section>
    );
}

export default MovieCards;
