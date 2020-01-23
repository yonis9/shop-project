import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { cartItemsSelector } from '../../redux/cart/cart-selectors'
import '../CustomButton/CustomButton';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';


import './CartDropdown.scss';


const CartDropdown = ({ cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        {
            cartItems.length ? 
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => 
                        <CartItem key={cartItem.id} item={cartItem} />
                        )
                }
            </div> :
            <span className='empty-message'>Your cart is empty</span>
        }
        <CustomButton onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }
        } >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
})

export default withRouter(connect(mapStateToProps)(CartDropdown));