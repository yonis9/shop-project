import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
    const stripePrice = price * 100;
    const { REACT_APP_STRIPE_API_KEY } = process.env;

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
            alert('Payment successful!')
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
         stripeKey={REACT_APP_STRIPE_API_KEY}
          />

    )
}

export default StripeButton;