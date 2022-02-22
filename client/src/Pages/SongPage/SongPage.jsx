import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  SongPageContainer,
  SongImage,
  SongName,
  SongInfo,
  ArtistName,
  AlbumName,
  ListenButton,
  SongArtists,
} from './SongPage'

import { getTrackInfo } from '../../spotify'

import { catchErrors } from '../../utils'

const SongPage = () => {
  const navigate = useNavigate()
  const id = window.location.pathname.replace('/song/', '')
  const [songData, setSongData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTrackInfo(id)
      const { data } = response
      setSongData(data)
    }

    catchErrors(fetchData())
  }, [])

  return (
    <>
      {songData && (
        <SongPageContainer>
          <SongImage src={songData.album.images[0].url} />
          <SongInfo>
            <SongName>{songData.name}</SongName>
            <SongArtists>
              {songData.artists.map((item) => (
                <ArtistName onClick={() => navigate(`/artist/${item.id}`)} key={item.id}> {item.name}</ArtistName>
              ))}
            </SongArtists>
            <AlbumName onClick={() => navigate(`/albums/${songData.album.id}`)}>
              {songData.album.name} • {songData.album.release_date}
            </AlbumName>
            <ListenButton
              onClick={() =>
                window.open(songData.external_urls.spotify)
              }
            >
              PLAY ON SPOTIFY
            </ListenButton>
          </SongInfo>
        </SongPageContainer>
      )}
    </>
  )
}

export default SongPage
