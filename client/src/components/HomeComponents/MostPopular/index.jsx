import React, { useEffect, useState } from 'react';
import './MostPopular.scss';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
//img 900x500
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

function MostPopular() {
    const { t } = useTranslation();
    const [mostPopular, setMostPopular] = useState([]);

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

      async function getMostPopular() {
        try {
            const res = await axios.get("http://localhost:3000/moviecart");
            // Alınan verileri sırala ve en popüler 9 filmi seçzz
            const sortedPopularMovies = res.data.sort((a, b) => {
                // Her film için puanların ortalamasını hesapla
                const avgRatingA = a.moviepoint.reduce((total, item) => total + item.rating, 0) / a.moviepoint.length;
                const avgRatingB = b.moviepoint.reduce((total, item) => total + item.rating, 0) / b.moviepoint.length;
                // Sıralamayı yap
                return avgRatingB - avgRatingA; // Büyükten küçüğe doğru sırala
            }).slice(0, 9);
            setMostPopular(sortedPopularMovies);
        } catch (error) {
            console.error("Error fetching most popular movies:", error);
        }
    }
    
    useEffect(() => {
        getMostPopular();
    }, []);
    
    console.log();

    useEffect(() => {
        getMostPopular();
    }, []);

    return (
        <section id='mostPopular'>
            <div className="upBox">
                <p><h1>{t("MostPopularHead")}</h1>{t("MostPopularMain")}</p>
            </div>
            <div className="downBox">
                {mostPopular.map((item, index) => (
                    <div className="cart" key={index}>
                        <div className="imgBox">
                            <img src={item.popularcartimage} alt="" />
                            <div className="hoverBox">
                                {/* <h1>{item.name}</h1> */}
                                <p>{item.category}</p>
                                <p>{handleRating((item.moviepoint.reduce((total, item)=> total += (item.rating),0)/item.moviepoint.length).toFixed(0) / 2).map(x => {
                      if (x === 1) {
                        return <FaStar style={{color:"var(--bg-color-1)"}} />
                      }
                      else if (x === 2) {
                        return <FaStarHalfStroke style={{color:"var(--bg-color-1)", fontSize: '20px'}}  />
                      }
                      return <FaStar style={{ color: "grey" }} />

                    })}</p>
                     <span>{(item.moviepoint.reduce((total, item)=> total += (item.rating),0)/item.moviepoint.length).toFixed(1)}</span>
                                {/* <sapn>{(item.moviepoint.reduce((total, item)=> total += (item.rating),0)/item.moviepoint.length).toFixed(1)}</sapn> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MostPopular;
