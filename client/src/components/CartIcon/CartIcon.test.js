import React from 'react';
import { shallow } from 'enzyme';

import { CartIcon } from './CartIcon';

describe('CartIcon component', () => {
    let wrapper;
    let mockToggleCartHidden;

    beforeEach(() => {
      mockToggleCartHidden = jest.fn();
  
      const mockProps = {
        itemCount: 0,
        toggleCartHidden: mockToggleCartHidden
      };
  
      wrapper = shallow(<CartIcon {...mockProps} />);
    });
  
    it('should render CartIcon component', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should called toggleCartHidden', () => {
        wrapper.find('CartIconContainer').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    })

    it('should render the itemCount as the text', () => {
        const itemCount = +wrapper.find('ItemCountContainer').text();
        expect(itemCount).toBe(0);
    })
})