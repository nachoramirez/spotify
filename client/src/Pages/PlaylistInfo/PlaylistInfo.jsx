import React, { useEffect, useState } from 'react'
import {
  PlaylistInfoContainer,
  PlaylistData,
  ImagePlaylist,
  PlaylistName,
  PlaylistDescription,
  MadeBy,
  Content,
  ArtistMadeBy,
} from './PlaylistInfo'

import ListOfSongs from '../../components/ListOfSongs/ListOfSongs.jsx'

import { getPlaylistInfo } from '../../spotify'

import { catchErrors } from '../../utils'
import Loader from '../../components/Loader'

const PlaylistInfo = () => {
  const id = window.location.pathname
  const isAlbum = id.includes('album')
  const [playlistInfo, setPlaylistInfo] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlaylistInfo(id)
      setPlaylistInfo(data)
    }

    catchErrors(fetchData())
  }, [])

  return (
    <PlaylistInfoContainer>
      {!playlistInfo ? (
          <Loader height={"100vh"} />
        ) :  (
        <Content>
          <PlaylistData>
            <ImagePlaylist src={playlistInfo.images[0].url} />
            <PlaylistName>{playlistInfo.name}</PlaylistName>
            {isAlbum ? (
              <ArtistMadeBy>
                {playlistInfo.artists.map((artist) => (
                  <MadeBy key={artist.id}>{artist.name}</MadeBy>
                ))}
              </ArtistMadeBy>
            ) : (
              <MadeBy>By {playlistInfo.owner.display_name}</MadeBy>
            )}
            <PlaylistDescription>
              {playlistInfo.description}
            </PlaylistDescription>
            <MadeBy>{playlistInfo.tracks.total} tracks</MadeBy>
          </PlaylistData>

          <ListOfSongs
            playlistSongs={!isAlbum && playlistInfo.tracks}
            songs={isAlbum && playlistInfo.tracks.items}
          />
        </Content>
      )}
    </PlaylistInfoContainer>
  )
}

export default PlaylistInfo
