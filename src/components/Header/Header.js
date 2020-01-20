import React from 'react';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase';

import './Header.scss';


const Header = ({ currentUser }) => (
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
        </div>
    </div>
)

const mapStateToProp = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProp)(Header);