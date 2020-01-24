import React from 'react';
import { connect } from 'react-redux';

import { collectionSelector } from '../../redux/shop/shop-selectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
   const { items } = collection

    return (
    <div className='collection-page'>
        <div className='title'>{collection.title}</div>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>

)}

const MapStateToProps = (state, ownProps) => ({
    collection: collectionSelector(ownProps.match.params.collectionId)(state)
})

export default connect(MapStateToProps)(CollectionPage);