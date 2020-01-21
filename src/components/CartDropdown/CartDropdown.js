import React from 'react';

import '../CustomButton/CustomButton';

import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            <ol>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ol>
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;