import React, { useState, useEffect, useRef, useMemo } from 'react';
import Chart from 'chart.js/auto';
import './ChartAdmin.scss';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { PiFilmReelBold } from "react-icons/pi";
import { HiUser } from "react-icons/hi2";
import axios from 'axios'

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
// defaults.plugins.title.color = "black";

function ChartAdmin() {
    const [userCount, setuserCount] = useState([])
    const [movieCount, setmovieCount] = useState([])
    const [freePriceCount, setfreePriceCount] = useState(0);
    const [basicPriceCount, setbasicPriceCount] = useState(0);
    const [premiumpriceCount, setpremiumpriceCount] = useState(0);
    const [notselectpriceCount, setnotselectpriceCount] = useState(0);

    async function dataUser() {
        const res = await axios.get("http://localhost:3000/users")
        setuserCount(res.data)
    }
    async function dataMovie() {
        const res = await axios.get("http://localhost:3000/moviecart")
        setmovieCount(res.data)
    }

    useEffect(() => {
        dataUser()
        dataMovie()
    }, [])




    useEffect(() => {
        let newfreePriceCount = 0;
        let newbasicPriceCount = 0;
        let newpremiumpriceCount = 0;
        let newnotselectpriceCount = 0;

        userCount && userCount.forEach((element) => {
            if (element.stripe === 'Free') {
                newfreePriceCount++;
            } else if (element.stripe === 'Basic') {
                newpremiumpriceCount++;
            } else if (element.stripe === 'Premium') {
                newbasicPriceCount++;
            }
            else {
                newnotselectpriceCount++
            }
        });

        setfreePriceCount(newfreePriceCount);
        setpremiumpriceCount(newpremiumpriceCount);
        setbasicPriceCount(newbasicPriceCount);
        setnotselectpriceCount(newnotselectpriceCount);
    }, [userCount]);

    const chartRef = useRef(null);

    const data = useMemo(
        () => ({
            labels: ['Free', 'Basic', 'Premium', "Not Selected"],
            color: "white",
            datasets: [
                {
                    label: 'Product Count',
                    data: [freePriceCount, premiumpriceCount, basicPriceCount, notselectpriceCount],
                    backgroundColor: [
                        'green',
                        '#00B4D8',
                        'gold',
                        '#D00000',
                    ],
                    hoverOffset: 30,
                },
            ],
        }),
        [premiumpriceCount, freePriceCount, basicPriceCount, notselectpriceCount]
    );

    useEffect(() => {
        const ctx = document.getElementById('myChart');

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: data,
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data]);

    return (
        <div className='chartAdmin'>
            <div className="counterBox">
                <div className="userCountBox">
                    <div className="icons">

                        <HiUser />
                        <p>Users</p>
                        <div className="count">
                            {userCount.length}
                        </div>
                    </div>
                </div>
                <div className="productCountBox">
                    <div className="icons">

                        <PiFilmReelBold />
                        <p>Movie</p>
                        <div className="count">
                            {movieCount.length}
                        </div>
                    </div>
                </div>
            </div>
            <div className="chartBox">
                <h3>Cinema gia site payment system</h3>
                <div className="pie-chart">
                    <canvas id="myChart"></canvas>
                </div>
            </div>
        </div>
    );
}

export default ChartAdmin;
