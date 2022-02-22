import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const DropDownButon = styled.div`
  border-radius: var(--border-radius-subtle);
  background-color: var(--dark-grey);
  cursor: pointer;
  width: 150px;
  height: 50px;
  text-align: center;
  user-select: none;
`
const DropDownContent = styled.div`
  height: auto;
  width: 150px;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 15;
  transform: translateY(0%);
  background-color: var(--near-black);
`

const DropDownItem = styled.p`
  padding: 10px;
  &:hover {
    background-color: var(--dark-grey);
  }
`

const DropDown = ({propertyDrop, setPropertyDrop }) => {
  const [isOpen, setIsOpen] = useState(false)
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

  return (
    <DropDownButon onClick={() => setIsOpen(!isOpen)}>
      <DropDownItem>
        {propertyDrop === 'short_term'
          ? 'last 4 weeks'
          : propertyDrop === 'medium_term'
          ? ' last 6 months'
          : 'All time'}
      </DropDownItem>
      <DropDownContent isOpen={isOpen}>
        <DropDownItem onClick={() => setPropertyDrop('short_term')}>
          last 4 weeks
        </DropDownItem>
        <DropDownItem onClick={() => setPropertyDrop('medium_term')}>
          last 6 months
        </DropDownItem>
        <DropDownItem onClick={() => setPropertyDrop('long_term')}>
          All time
        </DropDownItem>
      </DropDownContent>
    </DropDownButon>
  )
}

export default DropDown
