import styled from 'styled-components'

export const TopArtistPageContainer = styled.section`
  flex-direction: column;
  padding: 50px 25px;
  height: auto;

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 30px;
  }
`
export const TitleAndSort = styled.div`
  display: flex;
  padding: 0 50px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0;
  }
`
export const TitleName = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const TopArtists = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 30px;
  padding: 50px;

  @media (max-width: 768px) {
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    padding: 30px 0;
    margin-bottom: 50px;
  }
`
