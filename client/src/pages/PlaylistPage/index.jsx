import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import NotMeanBox from '../../components/NotMeanBox';
import HeaderFromPlaylist from '../../components/PlaylistComponents/HeaderFromPlaylist';
import OpenPlaylist from '../../components/PlaylistComponents/OpenPlaylist';
import Loading from '../../components/Loading';

function PlaylistPage({ setloading, loading }) {


  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)

    setloading(true)
  }, [])
  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <NotMeanBox />
            <Helmet>
              <meta charSet="utf-8" />
              <title>Playlist</title>
            </Helmet>
            <OpenPlaylist />
          </>
        )
      }
    </>
  )
}

export default PlaylistPage