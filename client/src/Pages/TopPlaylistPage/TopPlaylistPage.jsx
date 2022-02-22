import React, { useEffect, useState } from 'react'

import {
  TopPlaylistPageContainer,
  TopPlaylist,
  TitleName,
} from './TopPlaylistPage.js'

import { getCurrentProfilePlaylist } from '../../spotify'

import { catchErrors } from '../../utils'

import Loader from '../../components/Loader.js'

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

  return !playlist ? (
    <Loader height={'100vh'}/>
  ) : (
    <TopPlaylistPageContainer>
      <TitleName>Your Playlist</TitleName>
      <TopPlaylist>
        {playlist.items.map((item) => (
          <Playlist key={item.id} data={item} />
        ))}
      </TopPlaylist>
    </TopPlaylistPageContainer>
  )
}

export default TopPlaylistPage
