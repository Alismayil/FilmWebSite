import React from 'react'
import './FilmCatagory.scss'
import AnimationBack from '../../../../image/animationGif.gif'
import SeriesBack from '../../../../image/seriesGif.gif'
import FilmBack from '../../../../image/filmGif.gif'
import AllMovieBack from '../../../../image/allCatagoryGif.gif'
import { Link } from "react-router-dom";

function FilmCatagory() {

    return (
        <section id='filmCatagory'>
            <Link to={'series'}>
                <div className="cart" style={{ backgroundImage: `url(${SeriesBack})` }}>
                    <div className="boxFront" style={{ backgroundColor: '#9D0208' }}></div>
                    <div className="cartHover" >
                        <div class="marqueeLeft">
                            <div>
                                <span style={{ gap: '450px' }}> Series
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />


                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>Series</>
                                </span>
                               
                                
                                <span style={{ gap: '450px' }}> Series
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>Series</>
                                </span>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
            <Link to={'animations'}>
                <div className="cart" style={{ backgroundImage: `url(${AnimationBack})` }}>
                    <div className="boxFront" style={{ backgroundColor: '#22577A' }}></div>
                    <div className="cartHover">
                        <div class="marqueeRight">
                            <div>
                                <span> Animation
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />


                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>Animation</>
                                </span>
                               
                                <span> Animation
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />

                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>Animation</>
                                </span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={'films'}>
                <div className="cart" style={{ backgroundImage: `url(${FilmBack})` }}>
                    <div className="boxFront" style={{ backgroundColor: '#134611' }}></div>
                    <div className="cartHover">
                        <div class="marqueeLeft">
                            <div>
                                <span style={{ gap: '460px' }}> Film
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />


                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>Film</>
                                </span>
                               
                                <span style={{ gap: '460px' }}> Film
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />

                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>Film</>
                                </span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={'movies'}>
                <div className="cart" style={{ backgroundImage: `url(${AllMovieBack})` }}>
                    <div className="boxFront" style={{ backgroundColor: '#E8E288' }}></div>
                    <div className="cartHover">
                        <div class="marqueeRight">
                            <div>
                                <span> All Movie
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />


                                </span>
                                <span style={{gap:'30px'}} className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <> All Movie</>
                                </span>
                               
                                <span> All Movie
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />

                                </span>
                                <span style={{gap:'30px'}} className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <> All Movie</>
                                </span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default FilmCatagory