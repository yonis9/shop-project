import React from 'react';
import { connect } from 'react-redux'

import '../CustomButton/CustomButton';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';


const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => 
                    <CartItem key={CartItem.id} item={cartItem} />
                    )
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);