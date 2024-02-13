import React, { useEffect, useState } from 'react';
import './MostPopular.scss';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
//img 900x500

function MostPopular() {
    const { t } = useTranslation();
    const [mostPopular, setMostPopular] = useState([]);

    async function getMostPopular() {
        try {
            const res = await axios.get("http://localhost:3000/moviecart");
            // Alınan verileri sırala ve en popüler 9 filmi seç
            const sortedPopularMovies = res.data.sort((a, b) => b.moviepoint - a.moviepoint).slice(0, 9);
            setMostPopular(sortedPopularMovies);
        } catch (error) {
            console.error("Error fetching most popular movies:", error);
        }
    }

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
                                <h1>{item.name}</h1>
                                <p>{item.category}</p>
                                <sapn>{item.moviepoint}</sapn>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MostPopular;
