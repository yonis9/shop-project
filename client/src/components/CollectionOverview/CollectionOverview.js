import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { previewCollectionSelector } from '../../redux/shop/shop-selectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { CollectionOverviewContainer } from './CollectionOverview.styles';

export const CollectionOverview = ( { collections }) => (
    <CollectionOverviewContainer>
         {
             collections.map(({ id, ...otherCollectionProps }) => (
                  <CollectionPreview key={id} {...otherCollectionProps}/>
               ))
          }
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: previewCollectionSelector
})


export default connect(mapStateToProps)(CollectionOverview);