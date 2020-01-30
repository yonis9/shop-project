import styled, { css } from 'styled-components';

const buttonStyles = css`
background-color: black;
color: white;
border: none;

&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
`

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #326abc;
        border: none;
    }
`

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    

    &:hover {
    background-color: black;
    color: white;
    border: none;
    }
`

const getButtonStyles = props => {
    if (props.isGoogleButton) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 25px 0 25px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans', sans-serif;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: 0.3s;

    ${getButtonStyles}

    &:focus {
    outline: 0
    }

    &:hover {
        transition: 0.3s;
    }

`