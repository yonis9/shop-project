import React from 'react';
import { shallow } from 'enzyme';

import CustomButton from './CustomButton';

it('should rendered CustomButton component', () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
});