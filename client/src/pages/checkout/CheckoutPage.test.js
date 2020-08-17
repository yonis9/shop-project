import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutPage } from './CheckoutPage';

// cartItems, total

describe('CheckoutPage component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            cartItems: [],
            total: 0
        };

        wrapper = shallow(<CheckoutPage {...mockProps}/>);
    });

    it('should render CheckoutPage component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});