import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
    cartItemsTotalSelector,
    cartItemsSelector } from '../../redux/cart/cart-selectors'

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    TestWarningContainer
} from './CheckoutPage.styles';

export const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem=> <CheckoutItem key={cartItem.id}cartItem={cartItem}/>)}
        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please use this test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </TestWarningContainer>
        <StripeButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    total: cartItemsTotalSelector
})

export default connect(mapStateToProps)(CheckoutPage);