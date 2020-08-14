import React from 'react';
import { shallow } from 'enzyme';

import { MenuItem } from './MenuItem';

describe('MenuItem component', () => {
    let wrapper;
    let mockHistory;
    let mockMatch;
    const mockImageUrl = 'images.com/hats';
    const mockLinkUrl = '/hats';
    const mockTitle = 'hats';
    const mockSize = 'large';

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        };

        mockMatch = {
            url: '/home'
        }

        const mockProps = {
            title: mockTitle,
            imageUrl: mockImageUrl,
            size: mockSize,
            linkUrl: mockLinkUrl,
            match: mockMatch,
            history: mockHistory
        };

        wrapper = shallow(<MenuItem {...mockProps}/>);
       
    });

    it('should render MenuItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call history.push with the right string when MenuItemContainer clicked', () => {
        wrapper.find('MenuItemContainer').simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${mockLinkUrl}`);
    });

    it('should pass size prop to MenuItemContainer', () => {
        expect(wrapper.find('MenuItemContainer').props().size).toBe(mockSize);
    });

    it('should pass imageUrl prop to BackgroundImage', () => {
        expect(wrapper.find('BackgroundImage').props().imageUrl).toBe(mockImageUrl);
    });

    it('TitleContainer text should be the uppercase title', () => {
        expect(wrapper.find('TitleContainer').text()).toBe(mockTitle.toUpperCase());
    });
});