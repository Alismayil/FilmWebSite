import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const MovieVideo = ({ Film }) => {

  
    return (

                // <ReactPlayer width="100%" height="100%" controls="true" url={Film.filmvideo} />
<div>
<ReactPlayer url={Film.filmvideo}   
  />

</div>
         
    );
};

export default MovieVideo;
 