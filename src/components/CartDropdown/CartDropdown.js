import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { cartItemsSelector } from '../../redux/cart/cart-selectors'
import '../CustomButton/CustomButton';

import CartItem from '../CartItem/CartItem';

import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
    CartDropdownButton
} from './CartDropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? 
                 cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />
                    )
                :  
                <EmptyMessageContainer className='empty-message'>Your cart is empty</EmptyMessageContainer>
            }
        </CartItemsContainer> 
        <CartDropdownButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
})

export default withRouter(connect(mapStateToProps)(CartDropdown));