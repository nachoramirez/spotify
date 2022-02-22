import styled from 'styled-components'

export const TopPlaylistPageContainer = styled.section`
  flex-direction: column;
  padding: 50px 25px;
  height: auto;
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 20px 10px;
    margin-bottom: 50px;
  }
`
export const TitleName = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  margin-left: 40px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const TopPlaylist = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 60px;
  padding: 50px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    padding: 20px 5px;
    grid-gap: 40px 10px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`

export const TitleAndSort = styled.div`
  display: flex;
  padding: 0 50px;
  justify-content: space-between;
`
