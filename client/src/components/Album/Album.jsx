import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AlbumContainer, AlbumPhoto, AlbumName, AlbumAutor } from './Album'

const Album = ({ data }) => {
  const navigate = useNavigate()
  return (
    <>
      {data && (
        <AlbumContainer onClick={() => navigate(`/albums/${data.id}`)}>
          <AlbumPhoto src={data.images[0].url} />
          <AlbumName> {data.name}</AlbumName>
          <AlbumAutor>{`De ${data.artists[0].name}`}</AlbumAutor>
        </AlbumContainer>
      )}
    </>
  )
}

export default Album
