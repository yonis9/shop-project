import React from 'react';
import { shallow } from 'enzyme';

import WithSpinner from './WithSpinner';
import Spinner from '../Spinner/Spinner';

describe('WithSpinner HOC', () => {
    const TestComponent = () => <div className='test' />;
    const WrappedComponent = WithSpinner(TestComponent);

    describe('if loading is true', () => {
        const wrapper = shallow(<WrappedComponent isLoading={true} />);

        it('should render Spinner component', () => {
            expect(wrapper.exists(Spinner)).toBe(true);
        });

        it('should not render TestComponent', () => {
            expect(wrapper.exists(TestComponent)).toBe(false);
        })

    });

    describe('if loading is false', () => {
        const wrapper = shallow(<WrappedComponent isLoading={false} />);

        it('should not render Spinner component', () => {
            expect(wrapper.exists(Spinner)).toBe(false);
        });

        it('should render TestComponent', () => {
            expect(wrapper.exists(TestComponent)).toBe(true);
        });
    });
});