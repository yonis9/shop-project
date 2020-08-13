import React from 'react';
import { shallow } from 'enzyme';

import FormInput from './FormInput';


describe('FormInput component', () => {
    let wrapper;
    let mockHandleChange;

    beforeEach(() => {
        mockHandleChange = jest.fn();

        const mockProps = {
            label: 'email',
            value: 'jhon@gmail.com',
            handleChange: mockHandleChange,
        };

        wrapper = shallow(<FormInput {...mockProps}/>);
    });

    it('should rendered FormInput component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleChange when input changes', () => {
        wrapper.find('FormInputContainer').simulate('change');

        expect(mockHandleChange).toHaveBeenCalled();
    });

    it('should render FormLabel if there is a label', () => {
        expect(wrapper.exists('FormLabel')).toBe(true);
    });

    it('should not render FormLabel if there is no label', () => {
        const newMockProps = {
            label: '',
            value: 'jhon@gmail.com',
            handleChange: mockHandleChange,
        };

        const newWrapper = shallow(<FormInput {...newMockProps}/>);
        
        expect(newWrapper.exists('FormLabel')).toBe(false);
    });
    
});