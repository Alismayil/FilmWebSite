import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import './MoviesDetailPage.scss'
import NotMeanBox from '../../components/NotMeanBox';
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { CgPlayListAdd } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

function MoviesDetailPage() {
  const [openTrailerBox, setOpenTrailerBox] = useState(false)
  const [openWatchMovieBox, setOpenWatchMovieBox] = useState(false)


  function handleOpenWatchMovieBox() {
    setOpenWatchMovieBox(!openWatchMovieBox)
  }

  function handleOpenTrailerBox() {
    setOpenTrailerBox(!openTrailerBox)
  }

  return (
    <>
      <NotMeanBox />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies Watch</title>
      </Helmet>
      <div className="moviesDetailPage">
        <div className={`movieWatchBox ${openWatchMovieBox ? 'openMovieBox':''}`}>
          <div className="closeBtn" onClick={handleOpenWatchMovieBox}>
            <IoCloseSharp />
          </div>
        </div>
        <div className="headerBox">
          <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2018_48/2666056/181130-daredevil-season-2-ew-705p.jpg" alt="" />
        </div>
        <div className="downBox">
          <div className={`trailerBox ${openTrailerBox ? "open" : ""}`}>
            <iframe src="https://www.youtube.com/embed/izdrYgrPxxo?list=RDizdrYgrPxxo" title="SYMPHONIE EXCL. #1 (MINUS)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="firstBox">
            <h1>Daredevil</h1>
            <div className="normalBox">
              <div className="starsBox">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke style={{ fontSize: '20px' }} />
              </div>
              <p>4.2</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" />

            </div>
          </div>
          <div className="secondBox">
            <p>Action</p>
            <span>●</span>
            <p>Action</p>
            <span>●</span>
            <p>Action</p>
          </div>
          <div className="thirdBox">
            <p>2H : 6Mins</p>
            <span>●</span>
            <p>Sep 2021
            </p>
            <span>●</span>
            <p>Christofer Nolan</p>
          </div>
          <div className="endBox">
            <div className="btn">
              <CgPlayListAdd style={{ fontSize: '20px' }} />
            </div>
            <div className="btn">
              <FaRegHeart />
            </div>
            {/* <Link className='link' to={'/login'}> */}
            <Link className='link' >
              <div className="watchBtn" onClick={handleOpenWatchMovieBox}>
                Watch
              </div>
            </Link>
            <div className="trailerBtn" onClick={handleOpenTrailerBox}>
              Trailer
            </div>
          </div>
          <div className="commentBox">
            <span>Comment</span>
            <form action="">
              <input type="text" placeholder='Your Comment' />
              <button><p>Send</p>
                <div className="line"></div></button>
            </form>
          </div>
          <div className="allCommentBox">
            <span>All Comment</span>
            <div className="sendCommentBox">
              her neyse comment
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoviesDetailPage