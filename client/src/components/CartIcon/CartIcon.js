import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { cartItemsCountSelector } from '../../redux/cart/cart-selectors';

import {
    CartIconContainer,
    ItemCountContainer,
    ShoppingIcon
} from './CartIcon.styles';

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
    itemCount: cartItemsCountSelector
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);