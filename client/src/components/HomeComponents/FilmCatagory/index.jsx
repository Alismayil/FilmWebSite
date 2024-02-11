import React, { useEffect, useState } from 'react'
import './FilmCatagory.scss'
import AnimationBack from '../../../../image/animationGif.gif'
import SeriesBack from '../../../../image/seriesGif.gif'
import FilmBack from '../../../../image/filmGif.gif'
import AllMovieBack from '../../../../image/allCatagoryGif.gif'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import axios from 'axios'

function FilmCatagory() {
    const { t, i18n } = useTranslation();
    const [filmCategory, setFilmCategory] = useState([])

    async function getFilmCategoryData() {
      const res = await axios.get("http://localhost:3000/filmcategory")
      setFilmCategory(res.data)
    }
  
    useEffect(() => {
      getFilmCategoryData()
    }, [])
    return (
    <>
    {
        filmCategory && filmCategory.map((item)=>(
            <section id='filmCatagory'>
            <Link to={'series'}>
                <div className="cart" style={{ backgroundImage: `url(${item.seriesgif})` }}>
                    <div className="boxFront" style={{ backgroundColor: '#9D0208' }}></div>
                    <div className="cartHover" >
                        <div class="marqueeLeft">
                            <div>
                                <span style={{ gap: '450px' }}>
                                     {t("FilmCategorySeries")}
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>{t("FilmCategorySeries")}</>
                                </span>
                               
                                
                                <span style={{ gap: '450px' }}> {t("FilmCategorySeries")}
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>{t("FilmCategorySeries")}</>
                                </span>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </Link>
            <Link to={'animations'}>
                <div className="cart" style={{ backgroundImage: `url(${item.animationgif})` }}>
                    <div className="boxFront" style={{ backgroundColor: '#22577A' }}></div>
                    <div className="cartHover">
                        <div class="marqueeRight">
                            <div>
                                <span> {t("FilmCategoryAnimations")}
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />


                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>{t("FilmCategoryAnimations")}</>
                                </span>
                               
                                <span> {t("FilmCategoryAnimations")}
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />

                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>{t("FilmCategoryAnimations")}</>
                                </span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={'films'}>
                <div className="cart" style={{ backgroundImage: `url(${item.filmgif})` }}>
                    <div className="boxFront" style={{ backgroundColor: '#134611' }}></div>
                    <div className="cartHover">
                        <div class="marqueeLeft">
                            <div>
                                <span style={{ gap: '460px' }}> {t("FilmCategoryFilms")}
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />


                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>{t("FilmCategoryFilms")}</>
                                </span>
                               
                                <span style={{ gap: '460px' }}> {t("FilmCategoryFilms")}
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />

                                </span>
                                <span className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <>{t("FilmCategoryFilms")}</>
                                </span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={'movies'}>
                <div className="cart" style={{ backgroundImage: `url(${item.allmoviegif})` }}>
                    <div className="boxFront" style={{ backgroundColor: '#E8E288' }}></div>
                    <div className="cartHover">
                        <div class="marqueeRight">
                            <div>
                                <span> {t("FilmCategoryAlls")}
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />


                                </span>
                                <span style={{gap:'30px'}} className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <> {t("FilmCategoryAlls")}</>
                                </span>
                               
                                <span> {t("FilmCategoryAlls")}
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />

                                </span>
                                <span style={{gap:'30px'}} className='hiddenBox'>
                                    <img src="https://img1.picmix.com/output/stamp/normal/1/1/4/2/2302411_aba33.gif" alt="" />
                                    <> {t("FilmCategoryAlls")}</>
                                </span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
        ))
    }
    </>
    )
}

export default FilmCatagory