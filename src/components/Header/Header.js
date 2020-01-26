import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
import { cartHiddenSelector } from '../../redux/cart/cart-selectors'
import { currentUserSelector } from '../../redux/user/user-selectors'

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown'

import { 
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './Header.styles';



const Header = ({ currentUser, hidden }) => (
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
            <OptionLink as='div'  onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
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

export default connect(mapStateToProp)(Header);