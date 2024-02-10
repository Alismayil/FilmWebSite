import React, { useEffect, useState } from 'react';
import './TimerLine.scss'

const DaireBilgileri = ({ bilgi }) => (
  <div className="daire-bilgi"  >
    <div className="normalBox">
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

  useEffect(() => {
    localStorage.setItem("secilenDaire", JSON.stringify(secilenDaire))
  }, [secilenDaire])

  const daireBilgileri = [
    { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/about-us-img-1.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2016 },
    { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-19.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2017 },
    { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-20.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2018 },
    { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-21.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2019 },
    { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-18.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2020 },
    { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/04/home-3-img-22.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2021 },
    { image: 'https://firstframe.qodeinteractive.com/wp-content/uploads/2023/03/home-3-img-5.jpg', headerText: 'MOVIE SCRIPTS &', mainText: 'screenplays', comment: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctnisi consequ adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque', time:2022 },
  ];

  return (
    <div className="container">
   <div className="normalScroolBox">
   <div className="scrollBar" >
        <div className="duz-hat">
          {daireBilgileri.map((daire, index) => (
            <>
              <div className={`hat ${secilenDaire === index ? 'secili' : ''}`}></div>

              <div
                key={index}
                className={`daire ${secilenDaire === index ? 'secili' : ''}`}
                onClick={() => setSecilenDaire(index)}
              >
                <p className='time'>{daire.time}</p>
              </div>
            </>
          ))}
          <div className="hat1"></div>

        </div>
      </div>
   </div>
      <div className="bilgi-kutusu">
        {secilenDaire !== null && (
          <DaireBilgileri bilgi={daireBilgileri[secilenDaire]} />
        )}
      </div>
    </div>
  );
};

export default TimerLine;
