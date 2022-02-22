import React, { useEffect, useState } from 'react'

import {
  TopPlaylistPageContainer,
  TopPlaylist,
  TitleName,
} from './TopPlaylistPage.js'

import { getCurrentProfilePlaylist } from '../../spotify'

import { catchErrors } from '../../utils'

import Playlist from '../../components/Playlist/Playlist.jsx'

const TopPlaylistPage = () => {
  const [playlist, setPlaylist] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getCurrentProfilePlaylist()
      setPlaylist(data)
    }
    
    catchErrors(fetchData())
  }, [])

  return (
    <TopPlaylistPageContainer>
      <TitleName>Your Playlist</TitleName>
      <TopPlaylist>
        {playlist &&
          playlist.items.map((item) => <Playlist key={item.id} data={item} />)}
      </TopPlaylist>
    </TopPlaylistPageContainer>
  )
}

export default TopPlaylistPage
