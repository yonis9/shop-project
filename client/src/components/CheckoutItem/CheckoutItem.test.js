import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutItem } from './CheckoutItem';

describe('CheckoutItem component', () => {
    let wrapper;
    let mockClearItem;
    let mockAddItem;
    let mockRemoveItem;

    beforeEach(() => {
        mockAddItem = jest.fn();
        mockRemoveItem = jest.fn();
        mockClearItem = jest.fn();

        const mockCartItem = {
            name: 'shirt',
            imageUrl: 'shirts.com',
            price: 15,
            quantity: 2
        };

        const mockProps = {
            cartItem: mockCartItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem,
            clearItem: mockClearItem
        };

        wrapper = shallow(<CheckoutItem {...mockProps} />);
    });

    it('should rendered CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call clearItem when remove button is clicked', () => {
        wrapper.find('RemoveButtonContainer').simulate('click');
        expect(mockClearItem).toHaveBeenCalled();
    })

    it('should call removeItem when left arrow is clicked', () => {
        wrapper.find('QuantityContainer').childAt(0).simulate('click');
        expect(mockRemoveItem).toHaveBeenCalled();
    })

    it('should call addItem when right arrow is clicked', () => {
        wrapper.find('QuantityContainer').childAt(2).simulate('click');
        expect(mockAddItem).toHaveBeenCalled();
    })

});