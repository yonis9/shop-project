import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { cartHiddenSelector } from '../../redux/cart/cart-selectors'
import { currentUserSelector } from '../../redux/user/user-selectors'
import { signOutStart } from '../../redux/user/user-actions'


import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown'

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './Header.styles';



const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
        <OptionLink to='/shop' >
            SHOP
        </OptionLink>
        <OptionLink to='/shop'>
            CONTACT
        </OptionLink>
        {
            currentUser ?
            <OptionLink as='div'  onClick={() => signOutStart()}>SIGN OUT</OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
        </OptionsContainer>
        {
            hidden ?
            null :
            <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProp = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: cartHiddenSelector
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProp, mapDispatchToProps)(Header);