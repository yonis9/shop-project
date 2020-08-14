import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { currentUserSelector } from '../../redux/user/user-selectors'
import { signOutStart } from '../../redux/user/user-actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

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

export const Footer = ({ currentUser, signOutStart}) => (
    <FooterContainer>
        <NavigationContainer>
            <LeftNavigation>
                <Navlink to='/shop/mens'>Mens</Navlink>
                <Navlink to='/shop/womens'>Womens</Navlink>
                <Navlink to='/shop/hats'>Hats</Navlink>
                <Navlink to='/shop/jackets'>Jackets</Navlink>
                <Navlink to='/shop/sneakers'>Sneakers</Navlink>
            </LeftNavigation>
            <RightNavigation>
                {
                    currentUser ? 
                    <Navlink onClick={signOutStart}>Sign Out</Navlink> :
                    <Navlink to='/signin'>Sign In</Navlink>
                }
                <Navlink to='/checkout'>Checkout</Navlink>
                
            </RightNavigation>
        </NavigationContainer>
        <FooterEnd>
            <P>
                <span>Made with </span>
                <FontAwesomeIcon icon={faHeart} /> 
                <span> by Yoni Sisso, ©2020</span>
            </P>
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
)


const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Footer);