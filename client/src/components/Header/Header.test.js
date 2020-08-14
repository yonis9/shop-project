import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import CartDropdown from '../CartDropdown/CartDropdown';

describe('Header component', () => {
    let wrapper;
    let mockSignOutStart;
    let mockCurrentUser;

    beforeEach(() => {
        mockSignOutStart = jest.fn();

        mockCurrentUser = {
            id: 1,
            name: 'Yoni'
        }

        const mockProps = {
            hidden: true,
            currentUser: mockCurrentUser,
            signOutStart: mockSignOutStart
        };

        wrapper = shallow(<Header {...mockProps} />);
    });
    
    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });


    describe('if currentUser is present', () => {
        it('should render sign out link', () => {
            const signOutLink = wrapper.find('OptionLink').at(2);
            expect(signOutLink.text()).toBe('SIGN OUT');
        });

        it('should call signOutStart when Sign out is been clicked', () => {
            wrapper.find('OptionLink').at(2).simulate('click');
            expect(mockSignOutStart).toHaveBeenCalled();
        });
    });

    describe('if currentUser is null', () => {
        it('should renderd sign in link', () => {
            const mockProps = {
                hidden: true,
                currentUser: null,
                signOutStart: mockSignOutStart
              };
        
            const newWrapper = shallow(<Header {...mockProps} />);
            const signInLink = newWrapper.find('OptionLink').at(2);
    
            expect(signInLink.text()).toBe('SIGN IN');

        });
    });

    describe('if hidden is true', () => {
        it('should not rendered CartDropdown', () => {
            expect(wrapper.exists(CartDropdown)).toBe(false);
        });
    });


    describe('if hidden is false', () => {
        it('should rendered CartDropdown', () => {
            const mockProps2 = {
                hidden: false,
                currentUser: null,
                signOutStart: mockSignOutStart
              };
    
            const newWrapper2 = shallow(<Header {...mockProps2} />);
            expect(newWrapper2.exists(CartDropdown)).toBe(true);
        });
    });

});
