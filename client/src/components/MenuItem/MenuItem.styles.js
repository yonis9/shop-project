import styled from 'styled-components';

export const MenuItemContainer = styled.div`
height: ${({ size }) => size ? '380px;' : '240px;'}
min-width: 30%;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px;
overflow: hidden;



&:hover {
  cursor: pointer;

  & .background-image {
    transform: scale(1.1);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  & .content {
    opacity: 0.9;
    transition: 0.6s;
  }
}

&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }


  @media only screen and (max-width: 800px) {
    height: 200px;
  }
`

export const BackgroundImage = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.imageUrl})
`

export const ContentContainer = styled.div`
    position: absolute;
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    transition: 0.6s;

    @media only screen and (max-width: 800px) {
      padding: 0 18px;
    }
`

export const TitleContainer = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;

    @media only screen and (max-width: 800px) {
      font-size: 20px;
    }
`

export const SubtitleContainer = styled.span`
    font-weight: lighter;
    font-size: 16px;
`