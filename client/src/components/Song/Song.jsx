import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDuration } from '../../utils'

import {
  SongContainer,
  PrincipalInfo,
  Image,
  PrincipalName,
  SmallerName,
} from './Song'

const Song = ({ data, index }) => {
  const navigate = useNavigate()

  const time = formatDuration(data.duration_ms)

  return (
    <SongContainer onClick={() => navigate(`/song/${data.id}`)}>
      <SmallerName center={true}> {index + 1}</SmallerName>
      <Image src={data.album ? data.album.images[0].url : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="} />
      <PrincipalInfo>
        <PrincipalName> {data.name}</PrincipalName>
        <SmallerName> {data.artists[0].name}</SmallerName>
      </PrincipalInfo>
      <SmallerName ShowOnResponsive={false} center={true}>
        {data.album ? data.album.name : ' '}
      </SmallerName>
      <SmallerName center={true}> {time}</SmallerName>
    </SongContainer>
  )
}

export default Song
