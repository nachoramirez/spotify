import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ArtistPageContainer,
  ArtistPhoto,
  ArtistName,
  FollowButton,
  ArtistHeader,
  TopTracks,
  TopTracksTitle,
  AlbumsContainer,
  Followers,
} from './ArtistPage'

import {
  getArtist,
  getArtistTopTracks,
  getArtistAlbums,
  getArtistRelatedArtist,
  getIfUserFollows,
  followArtist,
  unfollowArtist,
} from '../../spotify'

import { catchErrors } from '../../utils'

import Loader from '../../components/Loader'

import Album from '../../components/Album/Album.jsx'
import ListOfSongs from '../../components/ListOfSongs/ListOfSongs.jsx'
import People from '../../components/People/People.jsx'

const ArtistPage = () => {
  const location = useLocation()
  const id = location.pathname.replace('/artist/', '')
  const [artistData, setArtistData] = useState(null)
  const [artistTopTracks, setArtistTopTracks] = useState(null)
  const [artistAlbums, setArtistAlbums] = useState(null)
  const [artistRelatedArtist, setArtistRelatedArtist] = useState(null)
  const [isFollowing, setIsFollowing] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setArtistData(null)
      const response = await getArtist(id)
      const { data } = response
      setArtistData(data)
    }

    catchErrors(fetchData())
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      setArtistTopTracks(null)
      const response = await getArtistTopTracks(id)
      const { data } = response
      setArtistTopTracks(data)
    }

    catchErrors(fetchData())
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      setArtistAlbums(null)
      const response = await getArtistAlbums(id)
      const { data } = response
      setArtistAlbums(data)
    }

    catchErrors(fetchData())
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      setArtistRelatedArtist(null)
      const response = await getArtistRelatedArtist(id)
      const { data } = response
      setArtistRelatedArtist(data)
    }

    catchErrors(fetchData())
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      const response = await getIfUserFollows(id)
      const { data } = response
      setIsFollowing(data[0])
    }

    catchErrors(fetchData())
  }, [id])

  const followArtistFunction = () => {
    setIsFollowing(true)
    followArtist(id)
  }

  const unfollowArtistFunction = () => {
    setIsFollowing(false)
    unfollowArtist(id)
  }

  return (
    <>
      {!artistData ? (
        <Loader height={'100vh'} />
      ) : (
        <ArtistPageContainer>
          <ArtistHeader>
            <ArtistPhoto src={artistData.images[1].url} />
            <ArtistName> {artistData.name}</ArtistName>
            <Followers> {artistData.followers.total} followers</Followers>
            <FollowButton
              onClick={() =>
                isFollowing ? unfollowArtistFunction() : followArtistFunction()
              }
              selected={isFollowing}
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </FollowButton>
          </ArtistHeader>
          {!artistTopTracks ? (
            <Loader />
          ) : (
            <TopTracks>
              <TopTracksTitle> Top tracks</TopTracksTitle>
              <ListOfSongs songs={artistTopTracks.tracks} />
            </TopTracks>
          )}

          <TopTracks>
            <TopTracksTitle> Top Albums</TopTracksTitle>
            <AlbumsContainer>
              {!artistAlbums ? (
                <Loader />
              ) : (
                artistAlbums.items.map((item) => (
                  <Album key={item.id} data={item} />
                ))
              )}
            </AlbumsContainer>
          </TopTracks>
          <TopTracks>
            <TopTracksTitle> Their fans also listen </TopTracksTitle>
            <AlbumsContainer>
              {!artistRelatedArtist ? (
                <Loader />
              ) : (
                artistRelatedArtist.artists.map((item) => (
                  <People key={item.id} data={item} />
                ))
              )}
            </AlbumsContainer>
          </TopTracks>
        </ArtistPageContainer>
      )}
    </>
  )
}

export default ArtistPage
