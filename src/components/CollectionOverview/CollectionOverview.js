import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { previewCollectionSelector } from '../../redux/shop/shop-selectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionOverview.scss';

const CollectionOverview = ( { collections }) => (
    <div className='collection-overview'>
         {
             collections.map(({ id, ...otherCollectionProps }) => (
                  <CollectionPreview key={id} {...otherCollectionProps}/>
               ))
          }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: previewCollectionSelector
})


export default connect(mapStateToProps)(CollectionOverview);