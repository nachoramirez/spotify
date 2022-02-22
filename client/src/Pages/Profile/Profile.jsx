import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ProfileContainer,
  ProfileTop,
  TitleName,
  NameAndShowMore,
  ShowMore,
  TopSongs,
} from './Profile'

import {
  getCurrentProfilePlaylist,
  getCurrentProfileFollowedArtist,
  getTopArtist,
  getTopTraks,
} from '../../spotify'

import { catchErrors } from '../../utils'

import ProfileHeader from '../../components/ProfileHeader/ProfileHeader.jsx'
import People from '../../components/People/People.jsx'
import ListOfSongs from '../../components/ListOfSongs/ListOfSongs.jsx'
import Playlist from '../../components/Playlist/Playlist.jsx'

const Profile = ({ profile }) => {
  const navigate = useNavigate()
  const [followingArtist, setFollowingArtist] = useState(null)
  const [topArtist, setTopArtist] = useState(null)
  const [topTracks, setTopTracks] = useState(null)
  const [playlist, setPlaylist] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCurrentProfileFollowedArtist()
      const { data } = response
      console.log(data)
      setFollowingArtist(data)
    }

    catchErrors(fetchData())
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopArtist()
      const { data } = response
      setTopArtist(data)
    }

    catchErrors(fetchData())
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCurrentProfilePlaylist()
      const { data } = response
      setPlaylist(data)
    }

    catchErrors(fetchData())
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopTraks()
      const { data } = response
      setTopTracks(data)
    }

    catchErrors(fetchData())
  }, [])
  return (
    <ProfileContainer>
      <ProfileHeader profile={profile} followingArtist={followingArtist} />
      <NameAndShowMore>
        <TitleName> Top artists this month</TitleName>
        <ShowMore onClick={() => navigate('/top-artists')}> SHOW MORE</ShowMore>
      </NameAndShowMore>
      <ProfileTop>
        {topArtist &&
          topArtist.items.map((item) => <People key={item.id} data={item} />)}
      </ProfileTop>
      <NameAndShowMore>
        <TitleName> Top songs this month</TitleName>
        <ShowMore onClick={() => navigate('/top-songs')}> SHOW MORE</ShowMore>
      </NameAndShowMore>
      {topTracks && <ListOfSongs songs={topTracks.items} />}
      <NameAndShowMore>
        <TitleName> Your playlist</TitleName>
        <ShowMore onClick={() => navigate('/playlists')}> SHOW MORE</ShowMore>
      </NameAndShowMore>
      <ProfileTop>
        {playlist &&
          playlist.items.map((item) => <Playlist key={item.id} data={item} />)}
      </ProfileTop>
    </ProfileContainer>
  )
}

export default Profile
