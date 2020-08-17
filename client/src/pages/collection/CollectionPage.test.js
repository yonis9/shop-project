import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './CollectionPage';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

describe('CollectionPage', () => {
    let wrapper;
    let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

    beforeEach(() => {
        const mockCollection = {
            title: 'men',
            items: mockItems
        };

        wrapper = shallow(<CollectionPage collection={mockCollection}/>);
    });

    it('should render CollectionPage', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the same number of CollectionItems as collection array length', () => {
        expect(wrapper.find(CollectionItem).length).toBe(mockItems.length)
    });
});