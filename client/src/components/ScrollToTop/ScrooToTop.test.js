import React from 'react';
import { shallow } from 'enzyme';

import { ScrollToTop } from './ScrollToTop';

describe('ScrollToTop component', () => {
    let wrapper;
    let mockHistory;

    beforeEach(() => {
        mockHistory = {
            listen: jest.fn()
        }

        wrapper = shallow(<ScrollToTop history={mockHistory}/>);
    });

    it('should render ScrollToTop component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});