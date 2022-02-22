import React from 'react'

import {
  ProfileHeaderContainer,
  ProfileImage,
  ProfileName,
  ProfileInfo,
  LogoutButton,
} from './ProfileHeader'

import { logout } from '../../spotify'
import Loader from '../Loader'

const ProfileHeader = ({ profile, followingArtist }) => {
  return (
    <>
      {!profile ? (
        <Loader height="100vh" />
      ) : (
        <ProfileHeaderContainer>
          <ProfileImage src={profile.images[0].url} />
          <div>
            <h5> PROFILE</h5>
            <ProfileName>{profile.display_name}</ProfileName>
            <ProfileInfo>
              {followingArtist && profile && (
                <p>{`${profile.followers.total} followers • Follows ${followingArtist.artists.total} artists`}</p>
              )}
            </ProfileInfo>
          </div>
        </ProfileHeaderContainer>
      )}
      <LogoutButton onClick={() => logout()}> Logout</LogoutButton>
    </>
  )
}

export default ProfileHeader
