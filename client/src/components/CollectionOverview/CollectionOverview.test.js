import React from 'react';
import { shallow } from 'enzyme';

import { CollectionOverview } from './CollectionOverview';

const wrapper = shallow(<CollectionOverview collections={[]}/>);

it('should rendered CollectionOverview component', () => {
    expect(wrapper).toMatchSnapshot();
});

