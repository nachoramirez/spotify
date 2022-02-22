import styled from 'styled-components'

export const AlbumContainer = styled.div`
  height: 109%;
  width: 100%;
  background-color: var(--near-black);
  border-radius: var(--border-radius-subtle);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    filter: brightness(120%);
  }
`

export const AlbumPhoto = styled.img`
  width: 85%;
  border-radius: var(--border-radius-subtle);
  margin: 0 auto;
  overflow: hidden;
  aspect-ratio: 1/1;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 75%;
  }
`
export const AlbumName = styled.h1`
  margin-left: 15px;
  font-size: 1.3em;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`

export const AlbumAutor = styled.h3`
  font-weight: 400;
  color: var(--grey);
  overflow: hidden;
  margin-left: 15px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`
