import React from 'react'

import { ListOfSongsContainer } from './ListOfSongs'

import Song from '../Song/Song.jsx'

const ListOfSongs = ({ playlistSongs, songs }) => {
  return (
    <ListOfSongsContainer>
      {songs &&
        songs.map((item, index) => (
          <Song data={item} key={item.id} index={index} />
        ))}
      {playlistSongs &&
        playlistSongs.items.map((item, index) => (
          <Song data={item.track} key={item.track.id} index={index} />
        ))}
    </ListOfSongsContainer>
  )
}

export default ListOfSongs
