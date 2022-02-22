import styled from 'styled-components/macro'

export const PeopleContainer = styled.div`
  height: ${(props) => props.height || '100%'};
  width: 100%;
  background-color: var(--near-black);
  border-radius: var(--border-radius-subtle);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    filter: brightness(120%);
  }
`
export const PeoplePhoto = styled.img`
  width: 80%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (max-width: 768px) {
    width: 68%;
  }
`
export const PeopleName = styled.h1`
  font-size: 1.2em;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`
