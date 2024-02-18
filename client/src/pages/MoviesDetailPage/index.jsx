import axios from 'axios';
import { default as React, useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { CgPlayListCheck } from "react-icons/cg";
import { IoCloseSharp, IoStar, IoStarHalf } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdPlaylistAdd } from "react-icons/md";
import ReactPlayer from 'react-player';
import { Link, useParams } from "react-router-dom";
import NotMeanBox from '../../components/NotMeanBox';
import StarRating from '../../components/RatingStars';
import { PlaylistContext } from '../../context/PlaylistContext';
import { userContext } from '../../context/UserContext';
import useLocalStorage from '../../hook/LocalStorage/useLocalStorage';
import './MoviesDetailPage.scss';
import Loading from '../../components/Loading';
import ReklamPoster from '../../components/HomeComponents/ReklamPoster';
import ReklamPartner from '../../components/ReklamPartner';
import MovieVideo from '../../components/MovieVideo';
import PayNow from '../../components/PayNow';
import { PriceTypeContext } from '../../context/PriceTypeContext';

function MoviesDetailPage({ setloading, loading }) {
  const [openTrailerBox, setOpenTrailerBox] = useState(false);
  const [openWatchMovieBox, setOpenWatchMovieBox] = useLocalStorage(false);
  const [openSeriesBox, setopenSeriesBox] = useState(false);
  const { t, i18n } = useTranslation();
  const [movieCartDetail, setMovieCartDetail] = useState();
  const { id } = useParams();
  const { user } = useContext(userContext);
  const { handleAddPlaylist, playlist } = useContext(PlaylistContext)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showHello, setShowHello] = useState(false);
  const { choosePriceType, freeType } = useContext(PriceTypeContext)
  const mediaDisplay = windowWidth <= 720 ? "none" : ''


  function handleCheckPriceType() {
    if (choosePriceType === "Basic" || choosePriceType === "Premium" || freeType === "Free") {
      return "";
    } else {
      return "/price";

    }
  }


  async function getMovieCard() {
    const res = await axios.get(`http://localhost:3000/moviecart/${id}`);
    setMovieCartDetail(res.data);
  }

  function handleOpenSeriesBox() {
    setopenSeriesBox(!openSeriesBox);
  }

  function handleOpenWatchMovieBox() {
    setOpenWatchMovieBox(!openWatchMovieBox);
    const timer1 = setTimeout(() => setShowHello(true), 5000);
    const timer2 = setTimeout(() => setShowHello(false), 15600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }

  function handleOpenTrailerBox() {
    setOpenTrailerBox(!openTrailerBox);
  }

  function handleRating(rating) {
    const arr = []
    const isQaliq = rating % 1
    let deyer = 0
    if (isQaliq) {
      rating -= 0.5
      deyer = 1
    }
    for (let i = 0; i < rating; i++) {
      arr.push(1)
    }
    if (isQaliq) {
      arr.push(2)
    }
    for (let i = 0; i < 5 - rating - deyer; i++) {
      arr.push(0)
    }
    return arr
  }


  useEffect(() => {
    // const timer1 = setTimeout(() => setShowHello(true), 10000);
    // const timer2 = setTimeout(() => setShowHello(false), 15600);

    // return () => {
    //   clearTimeout(timer1);
    //   clearTimeout(timer2);
    // };
  }, []);


  useEffect(() => {
    getMovieCard();
  }, []);

  function convertMinuteToHour(minute) {
    const hour = Math.floor(minute / 60);
    const remainingMinute = minute % 60;
    return `${hour} ${t("Hour")} ${remainingMinute} ${t("Minute")} `;
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)

    setloading(true)
  }, [])
  return (

    <>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <NotMeanBox />

            <Helmet>
              <meta charSet="utf-8" />
              <title>Movies Watch</title>
            </Helmet>
            <div className="moviesDetailPage">
              {movieCartDetail ? (
                <>

                  <div className={`movieWatchBox ${openWatchMovieBox ? 'openMovieBox' : ''}`} style={choosePriceType !== "Premium" && choosePriceType !== "Basic" ? { display: mediaDisplay } : {}}>
                    <div className="video">
                      {choosePriceType === "Premium" ? (
                        <div className='reklamShow'>
                          {showHello && <ReklamPartner />}
                        </div>
                      ) : (
                        <div className='reklamLook'>
                          {showHello && <ReklamPartner />}
                        </div>
                      )}
                      <MovieVideo Film={movieCartDetail} className='movieee' />
                      <div className="boxxxxx">d</div>
                    </div>
                    <div className="closeBtn" onClick={handleOpenWatchMovieBox}>
                      <IoCloseSharp />
                    </div>
                  </div>

                  <div className="headerBox">
                    <img src={movieCartDetail.detailbigimage} alt="" />
                  </div>
                  <div className="downBox">

                    <div className={`trailerBox ${openTrailerBox ? "open" : ""}`}>
                      <iframe src={movieCartDetail.trailer} title="SYMPHONIE EXCL. #1 (MINUS)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className="firstBox">

                      <h1>{movieCartDetail.name}</h1>
                      <div className="normalBox">
                        <div className="starsBox">
                          <p>
                            {movieCartDetail.moviepoint.length !== 0 ?
                              handleRating((movieCartDetail.moviepoint.reduce((total, movieCartDetail) => total += (movieCartDetail.rating), 0) / movieCartDetail.moviepoint.length).toFixed(0) / 2).map(x => {
                                if (x === 1) {
                                  return <IoStar style={{ color: "var(--bg-color-1)" }} />;
                                } else if (x === 2) {
                                  return <IoStarHalf style={{ color: "var(--bg-color-1)" }} />;
                                }
                                return <IoStar style={{ color: "grey" }} />;
                              })
                              :
                              <>
                                {[...Array(5)].map((_, index) => (
                                  <IoStar key={index} style={{ color: "grey" }} />
                                ))}
                              </>
                            }
                          </p>
                        </div>
                        <p>{movieCartDetail.imdbpoint}</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" />
                      </div>
                    </div>
                    <div className="secondBox">
                      {movieCartDetail.categories &&
                        movieCartDetail.categories.map((cate, index) => (
                          <React.Fragment key={cate.category}>
                            <p>{cate.category}</p>
                            {index !== movieCartDetail.categories.length - 1 && <span>●</span>}
                          </React.Fragment>
                        ))}
                    </div>
                    <div className="thirdBox">
                      <p>{convertMinuteToHour(movieCartDetail.hourtime)}</p>
                      <span>●</span>
                      <p>{movieCartDetail.daytime}</p>
                      <span>●</span>
                      <p>{movieCartDetail.director}</p>
                    </div>
                    <div className="endBox">
                      <div className="btn">
                        <Link style={{ color: 'var(--mode-color-1)' }} to={user ? "" : "/login"}>
                          <div className="playlistBox" onClick={() => handleAddPlaylist(movieCartDetail._id)} >
                            {playlist.find((x) => movieCartDetail._id === x.product._id) ?
                              <CgPlayListCheck style={{ color: "var(--mode-color-1" }} /> : <MdPlaylistAdd />}
                          </div>
                        </Link>
                      </div>
                      <Link className='link' to={handleCheckPriceType()} >
                        <div className="watchBtn" onClick={handleOpenWatchMovieBox}>
                          {t("Watch")}
                        </div>


                      </Link>
                      <div className="trailerBtn" onClick={handleOpenTrailerBox}>
                        {t("Trailer")}
                      </div>
                    </div>
                    <div className="seriesBox" onClick={handleOpenSeriesBox}>
                      <p>{t("AllSeries")}</p>
                      <>{openSeriesBox ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</>
                      <div className={`openSeriesBox ${openSeriesBox ? "openBox" : ""}`}>
                        <div className="series"></div>
                        <div className="series"></div>
                        <div className="series"></div>
                      </div>
                    </div>
                    <div className="commentBox">
                      <span>{t("Comment")}</span>
                      <StarRating filmİD={movieCartDetail.moviepoint} Film={movieCartDetail} />
                      <form action="">
                        <input type="text" placeholder={`${t("YourComment")}`} />
                        <button><p>{t("CommentBtn")}</p>
                          <div className="line"></div></button>
                      </form>
                    </div>
                    <div className="allCommentBox">
                      <span>{t("AllComment")}</span>
                      <div className="sendCommentBox">
                        her neyse comment
                      </div>
                    </div>
                  </div>
                </>
              ) : ''}
            </div>
          </>
        )
      }
    </>

  );
}

export default MoviesDetailPage;
