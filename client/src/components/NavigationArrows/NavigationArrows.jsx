import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import ArrowImage from '../../icons/Arrows.svg'

const Arrows = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 90px;
  display: flex;
  justify-content: space-around;
  z-index: 10;
`

const Arrow = styled.div`
  height: 40px;
  width: 40px;
  background-color: rgba(0,0,0,0.6);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    width: 50%;
  }

  &:last-child {
    transform: rotate(180deg);
  }
`

const NavigationArrows = () => {
  const navigate = useNavigate()
  return (
    <Arrows>
      <Arrow onClick={() => navigate(-1)}>
        <img src={ArrowImage} />
      </Arrow>
      <Arrow onClick={() => navigate(1)}>
        <img src={ArrowImage} />
      </Arrow>
    </Arrows>
  )
}

export default NavigationArrows
