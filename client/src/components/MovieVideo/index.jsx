import React, { useRef, useState, useContext } from 'react';
import ReactPlayer from 'react-player';
import './MovieVideo.scss'
import { PriceTypeContext } from '../../context/PriceTypeContext';

const MovieVideo = ({ Film }) => {
    const { currentUser } = useContext(PriceTypeContext)


    const playerConfig = {
        file: {
          attributes: {
            controlsList: 'nodownload', 
          },
        },
        youtube: {
          playerVars: {
            modestbranding: 1, 
          },
        },
      };
      
    return (
<div className="lookVideo">
    {
        currentUser.stripe === "Premium"? <ReactPlayer width="100%" height="100%" controls="true" url={Film.filmvideo} />  :
        currentUser.stripe === "Basic"? <ReactPlayer config={playerConfig}   width="100%" height="100%" controls="true" url={Film.filmvideo} />:
        <ReactPlayer config={playerConfig}   width="100%" height="100%" muted={true}  playing={true} loop={true} url={Film.filmvideo} />
    }

</div>
         
    );
};

export default MovieVideo;
 