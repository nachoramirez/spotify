import styled from 'styled-components'

export const SearchPageContainer = styled.section`
  flex-direction: column;
  height: auto;
  align-items: center;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`

export const SearchInput = styled.input`
  font-size: 2em;
  background: none;
  border: none;
  width: 700px;
  height: 50px;
  outline: none;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SearchContainer = styled.form`
  display: flex;
  border-radius: var(--border-radius-pill);
  justify-content: space-between;
  width: 700px;
  height: 50px;
  text-decoration: none;
  background: white;
  padding-left: 20px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SearchImage = styled.img`
  width: 30px;
`

export const GridResults = styled.div`
  width: 90%;
  height: 700px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-auto-rows: 0;
  overflow: hidden;
  grid-gap: 34px;
  padding: 50px;
  margin: 20px 100px;

  @media (max-width: 768px) {
    padding-bottom: 600px;
    height: auto;
    width: 100%;
    padding: 0;
    grid-gap: 50px 20px;
    grid-template-rows: 260px 260px 260px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

export const SearchTitle = styled.h1`
  align-self: flex-start;
  margin: 20px 100px;

  @media (max-width: 768px) {
    margin: 20px 10px;
  }
`
