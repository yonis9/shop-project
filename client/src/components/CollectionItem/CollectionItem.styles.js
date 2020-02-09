import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .image {
            opacity: 0.8;
          }

        button {
          display: flex;
          opacity: 0.9;
        }
`

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: url(${(props) => props.imageUrl})
`
export const CollectionFooterContainer = styled.div`
    padding:  0 20px;
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-evenly;
    font-size: 18px;
`

export const NameContainer = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const PriceContainer = styled.span`
    width: 10%;
    text-align: right;
`



