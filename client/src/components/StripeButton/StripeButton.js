import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const stripePrice = price * 100;
    const { REACT_APP_STRIPE_API_KEY } = process.env;

    const onToken = (token) => {
        console.log(token);
        alert('Payment successful')
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