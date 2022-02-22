import styled from 'styled-components'

export const SongPageContainer = styled.section`
  align-items: center;
  justify-content: space-around;
  padding: 60px;

  @media (max-width: 768px) {
    height: 90vh;
    flex-direction: column;
    /* justify-content: space-between; */
    padding: 10px;
  }
`

export const SongImage = styled.img`
  height: 600px;
  width: 600px;
  margin: 20px;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`
export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`
export const SongArtists = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    align-items: center;
    flex-direction: column;
  }
`

export const SongName = styled.h1`
  font-size: 4em;
  justify-self: left;
  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`

export const ArtistName = styled.h1`
  color: var(--grey);
  font-size: 3em;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    filter: brightness(1.2)
  }
  &:not(:last-child):after {
    content: ', ';
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
    &:not(:last-child):after {
      content: ' ';
    }
  }
`

export const AlbumName = styled.p`
  color: var(--grey);
  font-size: 1.7em;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    filter: brightness(1.5)
  }
  @media (max-width: 768px) {
    font-size: 1.4em;
  }
`

export const ListenButton = styled.button`
  background-color: var(--green);
  height: 50px;
  width: 40%;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`
