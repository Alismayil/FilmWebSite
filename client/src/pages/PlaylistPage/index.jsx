import React from 'react'
import {Helmet} from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromPlaylist from '../../components/PlaylistComponents/HeaderFromPlaylist';
import OpenPlaylist from '../../components/PlaylistComponents/OpenPlaylist';

function PlaylistPage() {
  return (
    <>
    <NotMeanBox/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Playlist</title>
    </Helmet>
{/* <HeaderFromPlaylist/> */}
<OpenPlaylist/>
  </>
  )
}

export default PlaylistPage