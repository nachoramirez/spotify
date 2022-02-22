import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  NavBarContainter,
  Logo,
  Menu,
  MenuItem,
  UserIconContainer,
  UserIconImg,
} from './NavBar'

import { useWindowDimensions } from '../../utils'

import SpotifyIcon from '../../icons/SpotifyLogo.svg'
import UserIcon from '../../icons/UserIcon.svg'

const NavBar = ({ photo }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const width = useWindowDimensions()
  return (
    <NavBarContainter>
      <Logo src={SpotifyIcon} onClick={() => navigate('/profile')} />
      <Menu>
        <MenuItem
          onClick={() => navigate('/profile')}
          selected={location.pathname === '/profile'}
        >
          <UserIconContainer>
            <UserIconImg hasProfile={!photo} src={photo ? photo : UserIcon} />
          </UserIconContainer>
        </MenuItem>
        <MenuItem
          onClick={() => navigate('/top-artists')}
          selected={location.pathname === '/top-artists'}
        >
          <h3>Top Artist</h3>
        </MenuItem>
        <MenuItem
          onClick={() => navigate('/top-songs')}
          selected={location.pathname === '/top-songs'}
        >
          <h3>Top Songs</h3>
        </MenuItem>
        <MenuItem
          onClick={() => navigate('/playlists')}
          selected={location.pathname === '/playlists'}
        >
          <h3>My Playlist</h3>
        </MenuItem>
        <MenuItem
          onClick={() => navigate('/search/')}
          selected={location.pathname === '/search'}
        >
          <h3>Search</h3>
        </MenuItem>
      </Menu>
    </NavBarContainter>
  )
}

export default NavBar
