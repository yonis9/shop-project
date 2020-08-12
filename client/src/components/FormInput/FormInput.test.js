import React from 'react';
import { shallow } from 'enzyme';

import FormInput from './FormInput';


it('test', () => {
    expect(shallow(<FormInput />)).toMatchSnapshot()
});