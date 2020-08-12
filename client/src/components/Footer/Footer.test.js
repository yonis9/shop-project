import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer.js';


describe('Footer component', () => {
    let wrapper;
    let mockHistory;
    let mockCurrentUser;
    let mockSignOutStart;

    beforeEach(() => {
        mockHistory = {
            push: jest.fn()
        };

        mockCurrentUser = {
            id: 1,
            name: 'Yoni'
        }

        mockSignOutStart = jest.fn();

       const mockProps = {
            history: mockHistory,
            currentUser: mockCurrentUser,
            signOutStart: mockSignOutStart
        };

        wrapper = shallow(<Footer {...mockProps} />);
    });

    it('should renderd Footer component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call history.push when clicked on LeftNavigation Navlinks', () => {
        for (let i = 0; i < 5; i++) {
            wrapper.find('Navlink').at(i).simulate('click');
        }
        
        expect(mockHistory.push).toHaveBeenCalledTimes(5);
    });

    it('should call signOutStart', () => {
        wrapper.find('Navlink').at(5).simulate('click');
        expect(mockSignOutStart).toHaveBeenCalled();
    });

    it('should call history.push when user is sign out', () => {
        const mockProps2 = { 
            history: mockHistory,
            signOutStart: mockSignOutStart,
            currentUser: null 
        };

        wrapper = shallow(<Footer {...mockProps2} />);

        wrapper.find('Navlink').at(5).simulate('click');
        expect(mockHistory.push).toHaveBeenCalled();
    })
});