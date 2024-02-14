import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import './MoviesDetailPage.scss';
import NotMeanBox from '../../components/NotMeanBox';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { CgPlayListAdd } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import axios from 'axios';
import useLocalStorage from '../../hook/LocalStorage/useLocalStorage';
import { useParams, Link } from "react-router-dom";

function MoviesDetailPage() {
  const [openTrailerBox, setOpenTrailerBox] = useState(false);
  const [openWatchMovieBox, setOpenWatchMovieBox] = useLocalStorage(false);
  const [openSeriesBox, setopenSeriesBox] = useState(false);
  const { t, i18n } = useTranslation();
  const [movieCartDetail, setMovieCartDetail] = useState();
  const { id } = useParams();

  async function getMovieCard() {
    const res = await axios.get(`http://localhost:3000/moviecart/${id}`);
    setMovieCartDetail(res.data);
  }

  function handleOpenSeriesBox() {
    setopenSeriesBox(!openSeriesBox);
  }

  function handleOpenWatchMovieBox() {
    setOpenWatchMovieBox(!openWatchMovieBox);
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
    getMovieCard();
  }, []);

  function convertMinuteToHour(minute) {
    const hour = Math.floor(minute / 60);
    const remainingMinute = minute % 60;
    return `${hour} ${t("Hour")} ${remainingMinute} ${t("Minute")} `;
  }

  return (
    <>
      <NotMeanBox />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies Watch</title>
      </Helmet>
      <div className="moviesDetailPage">
        {movieCartDetail ? (
          <>
            <div className={`movieWatchBox ${openWatchMovieBox ? 'openMovieBox' : ''}`}>
              <video autoPlay muted loop src={movieCartDetail.filmvideo}></video>
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
                  {handleRating(movieCartDetail.moviepoint).map(x => {
                                            if (x === 1) {
                                                return <FaStar />
                                            }
                                            else if (x === 2) {
                                                return  <FaStarHalfStroke style={{ fontSize: '20px' }} />
                                            }
                                            return <FaStar style={{color:"grey"}} />

                                        })}
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
                  <CgPlayListAdd style={{ fontSize: '20px' }} />
                </div>
                <Link className='link' >
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
  );
}

export default MoviesDetailPage;
