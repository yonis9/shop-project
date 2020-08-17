import React from 'react'; 
import { shallow } from 'enzyme';

import HomePage from './HomePage';

it('should render Homepage', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
})