import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { currentUserSelector } from '../../redux/user/user-selectors'
import { signOutStart } from '../../redux/user/user-actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
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

export const Footer = ({history, currentUser, signOutStart}) => (
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
                {
                    currentUser ? 
                    <Navlink onClick={signOutStart}>Sign Out</Navlink> :
                    <Navlink onClick={() => history.push('/signin')}>Sign In</Navlink>
                }
                <Navlink onClick={() => history.push('/checkout')}>Checkout</Navlink>
                
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer));