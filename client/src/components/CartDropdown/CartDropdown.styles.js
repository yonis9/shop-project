import styled from 'styled-components';

import CustomButton from '../CustomButton/CustomButton'

export const CartDropdownContainer = styled.div`
    padding: 20px;
    background: white;
    width: 240px;
    height: 340px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    top: 90px;
    right: 40px;
    position: absolute;
    z-index: 5;
`;
    
export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 240px;
    overflow: scroll;

    &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
        width: 12px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #555;
    }
`;

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`
