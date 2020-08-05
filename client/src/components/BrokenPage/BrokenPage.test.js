import React from 'react';
import { shallow } from 'enzyme';
import BrokenPage from './BrokenPage';

it('should rendered brokenPage component', () => {
    expect(shallow(<BrokenPage />)).toMatchSnapshot();
});