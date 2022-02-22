import React, { useRef, useState, useEffect } from 'react'
import {
  TopSongsPageContainer,
  TitleName,
  TopSongs,
  TitleAndSort,
} from './TopSongsPage'

import DropDown from '../../components/DropDown/DropDown'
import { getTopTracks } from '../../spotify'
import { catchErrors } from '../../utils'

import ListOfSongs from '../../components/ListOfSongs/ListOfSongs.jsx'

const TopSongsPage = () => {
  const [sortBy, setSortBy] = useState('short_term')
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopTracks(sortBy, 20)
      setData(data)
    }

    catchErrors(fetchData())
  }, [sortBy])

  return (
    <>
      {data && (
        <TopSongsPageContainer>
          <TitleAndSort>
            <TitleName> Top Songs</TitleName>
            <DropDown propertyDrop={sortBy} setPropertyDrop={setSortBy} />
          </TitleAndSort>
          <TopSongs>
            <ListOfSongs songs={data.items} />
          </TopSongs>
        </TopSongsPageContainer>
      )}
    </>
  )
}

export default TopSongsPage
