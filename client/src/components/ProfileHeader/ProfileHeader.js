import styled from 'styled-components'

export const ProfileHeaderContainer = styled.div`
  width: 100%;
  height: 350px;
  background: linear-gradient(var(--white), var(--grey));
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 500px;
    justify-content: center;
    padding: 20px;
  }
`

export const ProfileImage = styled.img`
  height: 15em;
  width: auto;
  border-radius: 50%;
  aspect-ratio: 1/1;
  margin: 0 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`

export const ProfileName = styled.h1`
  font-size: 7em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: wrap;
  font-size: 1.1em;
`

export const LogoutButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  height: 30px;
  width: 90px;
`
