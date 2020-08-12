import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './CollectionItem';


describe('CollectionItem component', () => {

    let wrapper;
    let moackAddItem;
    const mockName = 'shirt';
    const mockUrl = 'shirts.com';
    const mockPrice = 15;

    const mockItem = {
        name: mockName,
        imageUrl: mockUrl,
        price: mockPrice
    }

    beforeEach(() => {
        moackAddItem = jest.fn();
        wrapper = shallow(<CollectionItem item={mockItem} addItem={moackAddItem}/>)
    })

    it('should rendered CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should called addItem with Item', () => {
        wrapper.find('AddButton').simulate('click');
        expect(moackAddItem).toHaveBeenCalledWith(mockItem)
    });

    it('should render imageUrl as a prop on BackgroundImage', () => {
        expect(wrapper.find('BackgroundImage').prop('imageUrl')).toBe(mockUrl);
      });
    
    it('should render name in NameContainer', () => {
        expect(wrapper.find('NameContainer').text()).toBe(mockName);
    });

    it('should render price in PriceContainer', () => {
        expect(wrapper.find('PriceContainer').text()).toBe(`$${mockPrice}`);
    });

});