import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';
import { cartHiddenSelector } from '../../redux/cart/cart-selectors'
import { currentUserSelector } from '../../redux/user/user-selectors'

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown'

import './Header.scss';


const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
        <Link to='/shop' className='option'>
            SHOP
        </Link>
        <Link to='/shop' className='option'>
            CONTACT
        </Link>
        {
            currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link to='/signin' className='option'>SIGN IN</Link>
        }
        <CartIcon />
        </div>
        {
            hidden ?
            null :
            <CartDropdown />
        }
    </div>
)

const mapStateToProp = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: cartHiddenSelector
})

export default connect(mapStateToProp)(Header);