import React from 'react'
import './HeaderFromPlaylist.scss'
import PlaylistHeader from '../../../../image/PlaylistHeader.jpg'

function HeaderFromPlaylist() {
  return (
    <div className='headerFromPlaylist' style={{ backgroundImage: `url(${PlaylistHeader})` }}>
    <p>Playlist</p>
</div>
  )
}

export default HeaderFromPlaylist