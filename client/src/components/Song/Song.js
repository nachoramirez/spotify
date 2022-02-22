import styled from 'styled-components'

export const SongContainer = styled.div`
  display: grid;
  grid-template-columns: 4% 10% 40% auto 10%;
  overflow: hidden;
  width: 90%;
  cursor: pointer;
  border-radius: var(--border-radius-subtle);
  padding: 5px 10px;
  &:hover {
    background-color: var(--dark-grey);
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
    grid-template-columns: 10px 80px 0.9fr 10px;
  }
`
export const Image = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 20px;
  object-fit: cover;
  margin: auto;
  display: block;
`

export const PrincipalInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 100%;
    margin: auto 0;
  }
`
export const PrincipalName = styled.h2`
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`
export const SmallerName = styled.h3`
  font-weight: 400;
  color: var(--light-grey);
  margin: ${(props) => props.center && 'auto'};
  @media (max-width: 768px) {
    display: ${(props) => props.ShowOnResponsive == false && 'none'};
    font-size: 1.1em;
  }
`
