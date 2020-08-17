import React from 'react';
import { connect } from 'react-redux';

import { collectionSelector } from '../../redux/shop/shop-selectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import {
    ColleactionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './CollectionPage.styles';

export const CollectionPage = ({ collection }) => {
   const { title, items } = collection

    return (
    <ColleactionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </CollectionItemsContainer>
    </ColleactionPageContainer>

)}

const MapStateToProps = (state, ownProps) => ({
    collection: collectionSelector(ownProps.match.params.collectionId)(state)
})

export default connect(MapStateToProps)(CollectionPage);