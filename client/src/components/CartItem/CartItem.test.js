import React from 'react';
import { shallow } from 'enzyme';

import CartItem from './CartItem';

it('CartItem component', () => {
    const mockItem = {
        name: 'shirt',
        imageUrl: 'shirts.com',
        price: 15,
        quantity: 2
    }

    expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
})