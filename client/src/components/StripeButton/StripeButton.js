import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { clearCart } from '../../redux/cart/cart-actions'

const StripeButton = ({ price, clearCart }) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_117LDuWxyCJP68utX1OrcNni00elDqD6uc';

    const onToken = (token) => {
        axios({
            method: 'post',
            url: 'payment',
            data: {
                amount: stripePrice,
                token
            }
        })
        .then(response => {
            alert('Payment successful!');
            clearCart();
        })
        .catch(error => {
            console.log('Payment error: ', error);
            alert (
                'There was an issue with your payment. Please make sure you use the provided credit card.'
            )
        })
    }

    return ( 
        <StripeCheckout
         label='Pay Now'
         name='CRWN Clothing'
         billingAddress
         shippingAddress
         description={`Your total is: $${price}`}
         image='https://sendeyo.com/up/d/f3eb2117da'
         amount={stripePrice}
         token={onToken}
         panelLabel='Pay Now'
         stripeKey={publishableKey}
          />

    )
}

const mapDispatchToProps = disptach => ({
    clearCart: () => disptach(clearCart())
})


export default connect(null, mapDispatchToProps)(StripeButton);