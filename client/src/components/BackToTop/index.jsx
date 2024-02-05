    import React, { useState, useEffect } from 'react';
    import './BackToTop.scss';
    import { IoIosArrowRoundUp } from "react-icons/io";
    import ReactCurvedText from "react-curved-text";

    function BackToTopCircularText() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return (
        <div className="backToTop">
        <div className={`backTopCircleBox back-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
    <div className="arrowBox">
    <p><IoIosArrowRoundUp /></p>
    <p className='arr2'><IoIosArrowRoundUp /></p>
    </div>
        

        <div className="circleBox">
        <ReactCurvedText 
            width={120}
            height={120}
            cx={60}
            cy={60}
            rx={53}
            ry={53}
            startOffset={0}
            text=" Back To Top  ○  Back To Top ○ Back To Top ○ "
            />
        </div>
        <div className="circleBoxResp">
        <ReactCurvedText 
            width={70}
            height={70}
            cx={35}
            cy={35}
            rx={30}
            ry={30}
            startOffset={0}
            text=" Back To Top  ○  Back To Top ○ Back To Top ○ "

            />
        </div>
        </div>
        </div>
    );
    }

    export default BackToTopCircularText;
