import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { accessToken, getCurrentProfile } from './spotify.js'
import { catchErrors, ScrollToTop, useWindowDimensions } from './utils'
import { BrowserRouter as Router, Route, Routes, usen } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles'

import NavBar from './components/NavBar/NavBar.jsx'
import NavigationArrows from './components/NavigationArrows/NavigationArrows.jsx'

import Profile from './Pages/Profile/Profile.jsx'
import TopArtistPage from './Pages/TopArtistPage/TopArtistPage.jsx'
import TopSongsPage from './Pages/TopSongsPage/TopSongsPage.jsx'
import TopPlaylistPage from './Pages/TopPlaylistPage/TopPlaylistPage.jsx'
import ArtistPage from './Pages/ArtistPage/ArtistPage.jsx'
import SearchPage from './Pages/SearchPage/SearchPage.jsx'
import PlaylistInfo from './Pages/PlaylistInfo/PlaylistInfo.jsx'
import SongPage from './Pages/SongPage/SongPage.jsx'

const LoginButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--green);
  width: 350px;
  height: 60px;
  font-size: 1.6em;
  margin: auto;
`

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const LOGIN_URI =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:8888/login'
    : 'https://nacho-spotify.herokuapp.com/login'

function App() {
  const width = useWindowDimensions()
  const [token, setToken] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    setToken(accessToken)

    const fetchData = async () => {
      const response = await getCurrentProfile()
      const { data } = response
      console.log(data)
      setProfile(data)
    }

    catchErrors(fetchData())
  }, [])

  return (
    <>
      <GlobalStyle />
      {!token ? (
        <LoginContainer>
          <LoginButton href={LOGIN_URI}>Log in to Spotify</LoginButton>
        </LoginContainer>
      ) : (
        <Router className="app">
          <NavBar photo={profile && profile.images[0].url} />
          <ScrollToTop />
          {width < 768 && <NavigationArrows />}
          <Routes>
            <Route path="/" element={<Profile profile={profile} />} />
            <Route path="/top-artists" element={<TopArtistPage />}></Route>
            <Route path="/top-songs" element={<TopSongsPage />}></Route>
            <Route path="/playlists" element={<TopPlaylistPage />}></Route>
            <Route path="/playlists/:id" element={<PlaylistInfo />}></Route>
            <Route path="/albums/:id" element={<PlaylistInfo />}></Route>
            <Route path="/artist/:id" element={<ArtistPage />}></Route>
            <Route path="/search/:search" element={<SearchPage />}></Route>
            <Route path="/search/" element={<SearchPage />}></Route>
            <Route path="/song/:id" element={<SongPage />}></Route>
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App
