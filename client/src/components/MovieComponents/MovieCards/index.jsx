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
import { CgPlayListCheck } from "react-icons/cg";
import { PlaylistContext } from '../../../context/PlaylistContext';
import CardsLoad from '../../CardsLoad';


function MovieCards() {
    const [openFiltertextBox, setOpenFilterTextBox] = useState(false);
    const [changeTwoGrid, setChangeTwoGrid] = useLocalStorage();
    const { t } = useTranslation();
    const { user } = useContext(userContext);
    const [search, setSearch] = useState('');
    const [movieCard, setMovieCard] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [filterCategory, setFilterCategory] = useState("All");
    const [flipEffect, setflipEffect] = useState(false)
    const { playlist, handleAddPlaylist } = useContext(PlaylistContext)
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [load, setload] = useState(true)





    async function getMovieCardData() {
        try {
            const res = await axios.get('http://localhost:3000/moviecart');
            setMovieCard(res.data);
            setload(false)
        } catch (error) {
            console.error("Error fetching movie card data:", error);
        }
    }


    const handleCategory = (categories) => {
        if (selectedCategories.includes(categories)) {
            setSelectedCategories(selectedCategories.filter((selected) => selected !== categories));
        } else {
            setSelectedCategories([...selectedCategories, categories]);
        }
    };
    const filterByCategory = (movie) => {
        return (
            selectedCategories.length === 0 ||
            movie.categories.some((cat) => selectedCategories.includes(cat.category))
        );
    };


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
                            <input
                                type="checkbox"
                                id="comedyCheckbox"
                                onChange={() => handleCategory("Comedy")}
                                checked={selectedCategories.includes("Comedy")}
                                value={'Comedy'}
                            />
                            <label htmlFor="comedyCheckbox">{t("Comedy")}</label>
                        </form>
                        <form action="">
                            <input
                                type="checkbox"
                                id="horrorCheckbox"
                                onChange={() => handleCategory("Horror")}
                                checked={selectedCategories.includes("Horror")}
                                value={'Horror'}
                            />
                            <label htmlFor="horrorCheckbox">{t("Horror")}</label>
                        </form>
                        <form action="">
                            <input
                                type="checkbox"
                                id="actionCheckbox"
                                onChange={() => handleCategory("Action")}
                                checked={selectedCategories.includes("Action")}
                                value={'Action'}
                            />
                            <label htmlFor="actionCheckbox">{t("Action")}</label>
                        </form>
                        <form action="">
                            <input
                                type="checkbox"
                                id="dramaCheckbox"
                                onChange={() => handleCategory("Drama")}
                                checked={selectedCategories.includes("Drama")}
                                value={'Drama'}
                            />
                            <label htmlFor="dramaCheckbox">{t("Drama")}</label>
                        </form>
                        <form action="">
                            <input
                                type="checkbox"
                                id="romanticCheckbox"
                                onChange={() => handleCategory("Romantic")}
                                checked={selectedCategories.includes("Romantic")}
                                value={'Romantic'}
                            />
                            <label htmlFor="romanticCheckbox">{t("Romantic")}</label>
                        </form>
                        <form action="">
                            <input
                                type="checkbox"
                                id="adventureCheckbox"
                                onChange={() => handleCategory("Adventure")}
                                checked={selectedCategories.includes("Adventure")}
                                value={'Adventure'}
                            />
                            <label htmlFor="adventureCheckbox">{t("Adventure")}</label>
                        </form>
                        <form action="">
                            <input
                                type="checkbox"
                                id="fantasyCheckbox"
                                onChange={() => handleCategory("Fantasy")}
                                checked={selectedCategories.includes("Fantasy")}
                                value={'Fantasy'}
                            />
                            <label htmlFor="fantasyCheckbox">{t("Fantasy")}</label>
                        </form>
                        <form action="">
                            <input
                                type="checkbox"
                                id="sportsCheckbox"
                                onChange={() => handleCategory("Sports")}
                                checked={selectedCategories.includes("Sports")}
                                value={'Sports'}
                            />
                            <label htmlFor="sportsCheckbox">{t("Sports")}</label>
                        </form>
                        <form action="">
                            <input
                                type="checkbox"
                                id="musicalCheckbox"
                                onChange={() => handleCategory("Musical")}
                                checked={selectedCategories.includes("Musical")}
                                value={'Musical'}
                            />
                            <label htmlFor="musicalCheckbox">{t("Musical")}</label>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`downBox ${changeTwoGrid ? "twoGrid" : ""}`}>
                {load ?
                    <CardsLoad />
                    :
                    movieCard
                        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                        .filter((item) => filterCategory === "All" || filterData.includes(item.movietype))
                        .filter(filterByCategory)
                        .map((item) => (
                            <>
                                <div className="flipContainer">
                                    <div className={`card ${changeTwoGrid ? 'changeSwiper' : ""} `} >
                                        <div className={`frontSide ${changeTwoGrid ? 'changeSwiper' : ""}`}>
                                            <img src={item.cartposterimage} alt="" />
                                            <div className="changeBox">
                                                <MdOutlineChangeCircle />
                                            </div>
                                        </div>
                                        <div className={`backSide ${changeTwoGrid ? 'changeSwiper' : ""}`} style={{ backgroundImage: `url(${item.moviegif})` }}>
                                            <div className="frontBox"></div>
                                            <div className="text">
                                                <h1 className={`${changeTwoGrid ? 'textSmall' : ""}`}>{item.name}</h1>
                                                <span>{item.writter}</span>
                                                <h2>{t("Type")} / <p>{item.movietype}</p></h2>
                                                <p>{t("Time")}: <span>{convertMinuteToHour(item.hourtime)}</span></p>
                                                <Link to={user ? `/watch/${item._id}` : "/login"}>
                                                    <div className="playBtn">
                                                        <FaPlay />
                                                    </div>
                                                </Link>
                                                <Link style={{ color: 'var(--mode-color-1)' }} to={user ? "" : "/login"}>
                                                    <div className="playlistBox" onClick={() => handleAddPlaylist(item._id)} >
                                                        {playlist.find((x) => item._id === x.product._id) ? <CgPlayListCheck style={{ color: "var(--bg-color-1" }} /> : <MdPlaylistAdd />}
                                                    </div>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                }

            </div>
        </section>
    );
}

export default MovieCards;
