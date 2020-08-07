import React from 'react';

import {
    CartItemContainer,
    ImageContainer,
    ItemDetailsContainer
 } from './CarItem.styles';

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <span>{name}</span>
            <span >{quantity} x {price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default React.memo(CartItem);