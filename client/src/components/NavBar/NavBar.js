import styled from 'styled-components/macro'

export const NavBarContainter = styled.div`
  background-color: var(--black);
  position: fixed;
  height: 100vh;
  width: 9%;
  left: 0;
  top: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 10;

  @media (max-width: 768px) {
    top: auto;
    bottom: 0;
    height: 80px;
    width: 100%;
  }
`
export const Logo = styled.img`
  width: 55%;
  cursor: pointer;
  transition: ease-in-out 200ms;
  &:hover {
    filter: brightness(150%);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`

export const MenuItem = styled.div`
  background-color: ${(props) =>
    props.selected ? 'var(--near-black)' : 'var(--black)'};
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: ${(props) =>
    props.selected ? '4px solid var(--green)' : 'none'};
  cursor: pointer;
  transition: 200ms ease-in-out;
  &:hover {
    background-color: var(--near-black);
    border-right: 4px solid var(--green);
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px;
    border-top: ${(props) =>
      props.selected ? '4px solid var(--green)' : 'none'};
    border-right: none;
    &:hover {
      background-color: var(--near-black);
      border-top: 4px solid var(--green);
      border-right: none;
    }
    & > * {
      font-weight: 400;
      font-size: 0.9em;
    }
  }
`
export const UserIconContainer = styled.div`
  background-color: var(--dark-grey);
  width: 40%;
  border-radius: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  @media (max-width: 768px) {
    width: 70%;
  }
`
export const UserIconImg = styled.img`
  width: ${(props) => (props.showDefault ? '90%' : '100%')};
  filter: ${(props) => (props.showDefault ? 'invert(30%)' : '')};
  object-fit: cover;
`
