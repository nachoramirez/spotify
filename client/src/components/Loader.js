import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  border: 16px solid var(--grey);
  border-top: 16px solid var(--green);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotate} 2s linear infinite;
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || '100%'};
`

const Loader = ({height}) => {
  return (
    <LoadingContainer height={height}>
      <Loading />
    </LoadingContainer>
  )
}

export default Loader
