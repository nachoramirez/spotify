import React, { useRef, useState, useEffect } from 'react'
import {
  TopArtistPageContainer,
  TitleName,
  TopArtists,
  TitleAndSort,
} from './TopArtistPage'

import Loader from '../../components/Loader'

import { getTopArtist } from '../../spotify'
import { catchErrors } from '../../utils'

import DropDown from '../../components/DropDown/DropDown'

import People from '../../components/People/People.jsx'

const TopArtistPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [sortBy, setSortBy] = useState('short_term')
  const [data, setData] = useState(null)

  const ref = useRef(null)
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (ref.current == null) {
        setIsOpen(!isOpen)
      }
    }
    if (isOpen) {
      window.addEventListener('click', pageClickEvent)
    }

    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isOpen])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopArtist(sortBy, 20)
      setData(data)
    }

    catchErrors(fetchData())
  }, [sortBy])

  return !data ? (
    <Loader height="100vh" />
  ) : (
    <TopArtistPageContainer>
      <TitleAndSort>
        <TitleName> Top Artist</TitleName>
        <DropDown propertyDrop={sortBy} setPropertyDrop={setSortBy} />
      </TitleAndSort>
      <TopArtists>
        {data.items.map((item) => (
          <People key={item.id} data={item} height="250px" />
        ))}
      </TopArtists>
    </TopArtistPageContainer>
  )
}

export default TopArtistPage
