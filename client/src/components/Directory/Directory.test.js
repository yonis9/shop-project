import React from 'react';
import { shallow } from 'enzyme';

import { Directory } from './Directory';

it('should rendered Directory component', () => {
    expect(shallow(<Directory sections={[]} />)).toMatchSnapshot();
});