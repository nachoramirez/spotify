import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getSearchResults } from '../../spotify.js'

import { ScrollToTop } from '../../utils.js'

import {
  SearchPageContainer,
  SearchInput,
  SearchContainer,
  SearchImage,
  GridResults,
  SearchTitle,
} from './SearchPage'
import SearchIcon from '../../icons/SearchIcon.svg'
import People from '../../components/People/People.jsx'
import ListOfSongs from '../../components/ListOfSongs/ListOfSongs.jsx'
import Album from '../../components/Album/Album.jsx'

import Loader from '../../components/Loader.js'

const SearchPage = () => {
  ScrollToTop()
  const location = useLocation()
  const searchURL = location.pathname.replace('/search/', '')
  const navigate = useNavigate()
  const [input, setInput] = useState(searchURL)
  const [searchResults, setSearchResults] = useState(undefined)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    const fetchData = async () => {
      navigate(`/search/${input}`)
      const response = input !== '' && (await getSearchResults(input))
      console.log(response.data)
      setSearchResults(response.data)
    }

    fetchData()
  }, [input, searchURL])

  return (
    <SearchPageContainer>
      {/* { data !== undefined && data.artists.items[0].name} */}
      <SearchContainer onSubmit={handleSubmit}>
        <SearchImage src={SearchIcon} />
        <SearchInput onChange={handleChange} type="text" />
      </SearchContainer>

      {searchResults && (
        <>
          <SearchTitle> Songs</SearchTitle>
          {searchResults.tracks && (
            <ListOfSongs songs={searchResults.tracks.items} />
          )}

          <SearchTitle> Albums</SearchTitle>
          <GridResults>
            {!searchResults.albums ? (
              <Loader />
            ) : (
              searchResults.albums.items.map((item) => (
                <Album key={item.id} data={item} />
              ))
            )}
          </GridResults>
          <SearchTitle> Artist</SearchTitle>
          <GridResults>
            {!searchResults.artists ? (
              <Loader />
            ) : (
              searchResults.artists.items.map((item) => (
                <People key={item.id} data={item} />
              ))
            )}
          </GridResults>
        </>
      )}
    </SearchPageContainer>
  )
}

export default SearchPage
