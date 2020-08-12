import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from '../CollectionPreview/CollectionPreview';

// title, items, routeName, history, match

describe('CollectionPreview component', () => {
    let wrapper;
    let mockHistory;
    let mockMatch;
    let mockRouteName = 'men'

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        };

        mockMatch = {
            path: 'shop'
        };

        const mockProps = {
            title: 'men',
            items: [],
            routeName: mockRouteName,
            match: mockMatch,
            history: mockHistory
        };

        wrapper = shallow(<CollectionPreview {...mockProps} />);
    });

    it('should renderd CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should called history.push with the right string when TitleContainer clicked', () => {
        const expectedArgument = `${mockMatch.path}/${mockRouteName}`;
        wrapper.find('TitleContainer').simulate('click');

        expect(mockHistory.push).toHaveBeenCalledWith(expectedArgument);
    });
});