import styled from 'styled-components'

export const PlaylistInfoContainer = styled.section`
  align-items: center;
  justify-content: center;
  height: auto;
  margin-bottom: 100px;
`
export const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

export const PlaylistData = styled.div`
  height: 70%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-top: 50px;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
    margin: 0;
    margin-top: 20px;
  }
`

export const ImagePlaylist = styled.img`
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const PlaylistName = styled.h1`
  font-size: 3em;
  margin-top: 40px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2em;
  }
`
export const ArtistMadeBy = styled.div`
  display: flex;
`

export const MadeBy = styled.h1`
  font-weight: 100;
  margin-bottom: 50px;
  color: var(--light-grey);
  &:not(:last-child):after {
    content: ',';
  }
`

export const PlaylistDescription = styled.p`
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.1em;
  color: var(--light-grey);

  @media (max-width: 768px) {
    width: 100%;
  }
`
