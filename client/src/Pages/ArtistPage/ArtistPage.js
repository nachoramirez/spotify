import styled from 'styled-components'

export const ArtistPageContainer = styled.section`
  padding: 15px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
`

export const ArtistHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`

export const ArtistPhoto = styled.img`
  height: 300px;
  width: 300px;
  margin: 0 auto;
  border-radius: 50%;
  @media (max-width: 768px) {
    height: 250px;
    width: 250px;
  }
`
export const ArtistName = styled.h1`
  margin: 10px;
  font-size: 3em;
  @media (max-width: 768px) {
    font-size: 2em;
    text-align: center;
  }
`

export const Followers = styled.p`
  color: var(--light-grey);
  margin-bottom: 20px;
`

export const FollowButton = styled.button`
  height: 50px;
  width: 250px;
  background-color: ${(props) =>
    props.selected ? 'var(--dark-grey)' : 'var(--green)'};
`

export const TopTracks = styled.div`
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const TopTracksTitle = styled.h1`
  align-self: flex-start;
`
export const AlbumsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-auto-rows: 0;
  grid-template-rows: 280px;
  overflow: hidden;
  grid-gap: 1%;
  padding: 50px;
  width: 110%;
  transform: translateX(-5%);
  @media (max-width: 768px) {
    margin-top: 10px;
    height: 600px;
    grid-gap: 30px 10px;
    grid-auto-rows: 2;
    grid-template-rows: 200px 200px;
    padding: 5px 10px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));

    &:last-child {
      grid-template-rows: 200px 200px;
    }
  }
`
