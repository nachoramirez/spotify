import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  PlaylistContainer,
  PlaylistPhoto,
  PlaylistName,
  PlaylistAutor,
} from './Playlist'

const Playlist = ({ data }) => {
  const navigate = useNavigate()
  return (
    <>
      {data && (
        <PlaylistContainer onClick={() => navigate(`/playlists/${data.id}`)}>
          <PlaylistPhoto src={data.images[0].url} />
          <PlaylistName> {data.name}</PlaylistName>
          <PlaylistAutor>{`De ${data.owner.display_name}`}</PlaylistAutor>
        </PlaylistContainer>
      )}
    </>
  )
}

export default Playlist
