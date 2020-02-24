import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import { withRouter } from 'react-router-dom'

import {
    FooterContainer,
    NavigationContainer,
    LeftNavigation,
    RightNavigation,
    Navlink,
    FooterEnd,
    P,
    IconContainer,
    LinkContainer
} from './Footer.styles';

// import './Footer.scss';

const Footer = ({history}) => {
    
    return(
    <FooterContainer>
        <NavigationContainer>
            <LeftNavigation>
                <Navlink onClick={() => history.push('/shop/mens')}>Mens</Navlink>
                <Navlink onClick={() => history.push('/shop/womens')}>Womens</Navlink>
                <Navlink onClick={() => history.push('/shop/hats')}>Hats</Navlink>
                <Navlink onClick={() => history.push('/shop/jackets')}>Jackets</Navlink>
                <Navlink onClick={() => history.push('/shop/sneakers')}>Sneakers</Navlink>
            </LeftNavigation>
            <RightNavigation>
                <Navlink onClick={() => history.push('/signin')}>Sign In</Navlink>
                <Navlink onClick={() => history.push('/checkout')}>Checkout</Navlink>
                
            </RightNavigation>
        </NavigationContainer>
        <FooterEnd>
            <P>Made with love by Yoni Sisso, ©2020</P>
            <IconContainer>
                <LinkContainer href='https://www.linkedin.com/in/yonisisso/' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="3x"/>
                </LinkContainer>
                <LinkContainer href='https://github.com/yonis9' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare} size="3x"/>
                </LinkContainer>
            </IconContainer>
        </FooterEnd>
    </FooterContainer>
)}

export default withRouter(Footer);