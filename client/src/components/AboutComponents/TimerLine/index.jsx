import React, { useEffect, useState } from 'react';
import './TimerLine.scss';

const DaireBilgileri = ({ bilgi, animate }) => (
  <div className={`daire-bilgi ${animate ? 'animate__animated animate__fadeInRight' : ''}`} >
    <div className="normalBox" data-aos="zoom-in-up"  data-aos-duration="1000" >
      <div className="leftBox">
        <img src={bilgi.image} alt="" />
      </div>
      <div className="rightBox">
        <h1> {bilgi.headerText} <span> {bilgi.mainText} </span></h1>
        <p>{bilgi.comment}</p>
        <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/home-3-img-6.png" alt="" />
      </div>
    </div>
  </div>
);

const TimerLine = () => {
  const [secilenDaire, setSecilenDaire] = useState(localStorage.getItem("secilenDaire") ? JSON.parse(localStorage.getItem("secilenDaire")) : null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    localStorage.setItem("secilenDaire", JSON.stringify(secilenDaire));
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 1000); // 1 saniye sonra animasyonu kaldır
    return () => clearTimeout(timeout);
  }, [secilenDaire]);

const daireBilgileri = [ { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/about-us-img-1.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2016 }, { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-19.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2017 }, { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-20.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2018 }, { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-21.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2019 }, { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-18.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2020 }, { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-22.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2021 }, { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/home-3-img-5.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2022 }, ]; 

  return (
    <div className="container">
      <div className="normalScroolBox">
        <div className="scrollBar">
          <div className="duz-hat">
            {daireBilgileri.map((daire, index) => (
              <React.Fragment key={index}>
                <div className={`hat ${secilenDaire === index ? 'secili' : ''}`}></div>

                <div
                  className={`daire ${secilenDaire === index ? 'secili' : ''}`}
                  onClick={() => setSecilenDaire(index)}
                >
                  <p className='time'>{daire.time}</p>
                </div>
              </React.Fragment>
            ))}
            <div className="hat1"></div>
          </div>
        </div>
      </div>
      <div className="bilgi-kutusu">
        {secilenDaire !== null && (
          <DaireBilgileri bilgi={daireBilgileri[secilenDaire]} animate={animate} />
        )}
      </div>
    </div>
  );
};

export default TimerLine; 


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DaireBilgileri = ({ bilgi, animate }) => (
//   <div className={`daire-bilgi ${animate ? 'animate__animated animate__fadeInRight' : ''}`} >
//     <div className="normalBox" data-aos="zoom-in-up"  data-aos-duration="1000" >
//       <div className="leftBox">
//         <img src={bilgi.image} alt="" />
//       </div>
//       <div className="rightBox">
//         <h1> {bilgi.headerText} <span> {bilgi.mainText} </span></h1>
//         <p>{bilgi.comment}</p>
//         <img src="https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/home-3-img-6.png" alt="" />
//       </div>
//     </div>
//   </div>
// );

// const TimerLine = () => {
//   const [secilenDaire, setSecilenDaire] = useState(localStorage.getItem("secilenDaire") ? JSON.parse(localStorage.getItem("secilenDaire")) : null);
//   const [animate, setAnimate] = useState(false);
//   const [timeLine, setTimeLine] = useState([]);

//   async function getTimeLineData() {
//     try {
//       const res = await axios.get("http://localhost:3000/timeline")
//       setTimeLine(res.data)
//     } catch (error) {
//       console.error("Zaman çizelgesi verisi alınamadı:", error);
//     }
//   }

//   useEffect(() => {
//     getTimeLineData()
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("secilenDaire", JSON.stringify(secilenDaire));
//     setAnimate(true);
//     const timeout = setTimeout(() => setAnimate(false), 1000); // 1 saniye sonra animasyonu kaldır
//     return () => clearTimeout(timeout);
//   }, [secilenDaire]);

//   return (
//     <div className="container">
//       <div className="normalScroolBox">
//         <div className="scrollBar">
//           <div className="duz-hat">
//             {timeLine.map((daire, index) => (
//               <React.Fragment key={index}>
//                 <div className={`hat ${secilenDaire === index ? 'secili' : ''}`}></div>
//                 <div
//                   className={`daire ${secilenDaire === index ? 'secili' : ''}`}
//                   onClick={() => setSecilenDaire(index)}
//                 >
//                   {
//                     timeLine && timeLine.map((item)=>(
//                       <p className='time'>{item.time}</p>
//                     ))
//                   }
//                 </div>
//               </React.Fragment>
//             ))}
//             <div className="hat1"></div>
//           </div>
//         </div>
//       </div>
//       <div className="bilgi-kutusu">
//         {secilenDaire !== null && (
//           <DaireBilgileri bilgi={timeLine[secilenDaire]} animate={animate} timeLine={timeLine}/>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TimerLine;
