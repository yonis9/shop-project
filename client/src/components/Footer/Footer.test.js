import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer.js';


describe('Footer component', () => {
    let wrapper;
    let mockCurrentUser;
    let mockSignOutStart;

    beforeEach(() => {
        mockCurrentUser = {
            id: 1,
            name: 'Yoni'
        }

        mockSignOutStart = jest.fn();

       const mockProps = {
            currentUser: mockCurrentUser,
            signOutStart: mockSignOutStart
        };

        wrapper = shallow(<Footer {...mockProps} />);
    });

    it('should renderd Footer component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('if currentUser is present', () => {
        it('should render sign out link', () => {
            expect(wrapper.find('Navlink').at(5).text()).toBe('Sign Out');
        });

        it('should call signOutStart when clicked on Sign Out', () => {
            wrapper.find('Navlink').at(5).simulate('click');
            expect(mockSignOutStart).toHaveBeenCalled();
        });
    })


    it('should render sign in link when currentUse is null', () => {
        const mockProps2 = { 
            signOutStart: mockSignOutStart,
            currentUser: null 
        };

        wrapper = shallow(<Footer {...mockProps2} />);
        expect(wrapper.find('Navlink').at(5).text()).toBe('Sign In');
    })
});