import React from 'react';
import { shallow } from 'enzyme';

import { SignIn } from './SignIn';
import CustomButton from '../CustomButton/CustomButton';

describe('SignIn component', () => {
    let wrapper;
    let mockEmailSignInStart;
    let mockGoogleSignInStart;

    beforeEach(() => {
        mockEmailSignInStart = jest.fn();
        mockGoogleSignInStart = jest.fn();

        const mockProps = {
            emailSignInStart: mockEmailSignInStart,
            googleSignInStart: mockGoogleSignInStart
        }
        wrapper = shallow(<SignIn {...mockProps} />)
    });

    it('should render SignIn components', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call googleSignInStart when the Sign In With Google button been clicked', () => {
        wrapper.find(CustomButton).last().simulate('click');
        expect(mockGoogleSignInStart).toHaveBeenCalled();
    });


});