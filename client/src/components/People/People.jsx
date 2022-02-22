import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PeopleContainer, PeoplePhoto, PeopleName } from './People'

const People = ({ height, data }) => {
  const navigate = useNavigate()

  return (
    <>
      {data && (
        <PeopleContainer
          onClick={() => navigate(`/artist/${data.id}`)}
          height={height}
        >
          <PeoplePhoto src={data.images[1] && data.images[1].url} />
          <PeopleName> {data.name}</PeopleName>
        </PeopleContainer>
      )}
    </>
  )
}

export default People
