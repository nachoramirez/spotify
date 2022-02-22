import styled from 'styled-components/macro'

export const ProfileContainer = styled.section`
  flex-direction: column;
  height: auto;
  background: linear-gradient(180deg, var(--grey) 0%, #121212 35%);
`

export const ProfileTop = styled.div`
  display: grid;
  grid-auto-rows: 0;
  grid-template-rows: 1fr;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 2%;
  width: 100%;
  height: 380px;
  padding: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    height: 500px;
    grid-auto-rows: 2;
    grid-gap: 20px 15px;
    grid-template-rows: 1fr 1fr;
    padding: 5px;
    &:last-child {
      height: 600px;
      grid-gap: 30px 15px;
      /* padding-bottom: 50px; */
      margin-bottom: 50px;
    }
  }
`

export const NameAndShowMore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 20px 0 40px;

  @media (max-width: 768px) {
    margin: 20px 10px;
  }
`

export const TitleName = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

export const ShowMore = styled.h5`
  color: var(--light-grey);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`

export const TopSongs = styled.div`
  display: flex;
  flex-direction: column;
`
