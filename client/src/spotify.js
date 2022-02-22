import axios from 'axios'

const LOCALSTORAGE_KEYS = {
  accessToken: 'spotify_access_token',
  refreshToken: 'spotify_refresh_token',
  expireTime: 'spotify_token_expire_time',
  timestamp: 'spotify_token_timestamp',
}

const LOCALSTORAGE_VALUES = {
  accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
  refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
  expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
  timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
}

const hasTokenExpired = () => {
  const { accessToken, timestamp, expireTime } = LOCALSTORAGE_VALUES
  if (!accessToken || !timestamp) {
    return false
  }
  const millisecondsElapsed = Date.now() - Number(timestamp)
  return millisecondsElapsed / 1000 > Number(expireTime)
}

const refreshToken = async () => {
  try {
    if (
      !LOCALSTORAGE_VALUES.refreshToken ||
      LOCALSTORAGE_VALUES.refreshToken === 'undefined' ||
      Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000 < 1000
    ) {
      console.error('No refresh token available')
      logout()
    }

    const { data } = await axios.get(
      `/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`
    )

    window.localStorage.setItem(
      LOCALSTORAGE_KEYS.accessToken,
      data.access_token
    )
    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now())

    window.location.reload()
  } catch (e) {
    console.error(e)
  }
}

export const logout = () => {
  for (const property in LOCALSTORAGE_KEYS) {
    window.localStorage.removeItem(LOCALSTORAGE_KEYS[property])
  }
  window.location = window.location.origin
}

const getAccessToken = () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const queryParams = {
    [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
    [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
    [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
  }
  const hasError = urlParams.get('error')

  if (
    hasError ||
    hasTokenExpired() ||
    LOCALSTORAGE_VALUES.accessToken === 'undefined'
  ) {
    refreshToken()
  }

  if (
    LOCALSTORAGE_VALUES.accessToken &&
    LOCALSTORAGE_VALUES.accessToken !== 'undefined'
  ) {
    return LOCALSTORAGE_VALUES.accessToken
  }

  if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
    for (const property in queryParams) {
      window.localStorage.setItem(property, queryParams[property])
    }
    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now())
    return queryParams[LOCALSTORAGE_KEYS.accessToken]
  }

  return false
}

export const accessToken = getAccessToken()

axios.defaults.baseURL = 'https://api.spotify.com/v1'
axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`
axios.defaults.headers['Content-Type'] = 'application/json'

export const getCurrentProfile = () => axios.get('/me')
export const getTopArtist = (time, limit) =>
  axios.get(
    `/me/top/artists?limit=${limit || '10'}&offset=1&time_range=${
      time || 'short_term'
    }`
  )

export const getTopTracks = (time, limit) =>
  axios.get(
    `/me/top/tracks?limit=${limit || '10'}&offset=1&time_range=${
      time || 'short_term'
    }`
  )

export const getTopTraks = () =>
  axios.get('/me/top/tracks?limit=10&offset=1&time_range=short_term')
export const getCurrentProfilePlaylist = () =>
  axios.get('/me/playlists?limit=7')
export const getCurrentProfileFollowedArtist = () =>
  axios.get('/me/following?type=artist&limit=10')

export const getPlaylistInfo = (id) =>
  axios.get(`https://api.spotify.com/v1${id}?market=ES`)

export const getTrackInfo = (id) => axios.get(`/tracks/${id}?market=ES`)

export const getArtist = (artist) => axios.get(`/artists/${artist}`)

export const getArtistTopTracks = (artist) =>
  axios.get(`/artists/${artist}/top-tracks?market=ES`)

export const getArtistAlbums = (artist) =>
  axios.get(`/artists/${artist}/albums?market=ES&include_groups=album`)

export const getArtistRelatedArtist = (artist) =>
  axios.get(`/artists/${artist}/related-artists`)

export const getSearchResults = (query) =>
  axios.get(`/search?q=${query}&type=album,track,artist&limit=6`)

export const getIfUserFollows = (artist) =>
  axios.get(`/me/following/contains?ids=${artist}&type=artist`)

export const followArtist = (artist) => {
  const url = `https://api.spotify.com/v1/me/following?ids=${artist}&type=artist`
  return axios.put(url)
}

export const unfollowArtist = (artist) => {
  const url = `https://api.spotify.com/v1/me/following?ids=${artist}&type=artist`
  return axios.delete(url)
}
