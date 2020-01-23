import React, { Component }from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { collectionSelector } from '../../redux/shop/shop-selectors'

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import './ShopPage.scss';
const ShopPage = ({ collections }) => (
     <div className='shop-page'>
         {
             collections.map(({ id, ...otherCollectionProps }) => (
                  <CollectionPreview key={id} {...otherCollectionProps}/>
               ))
          }
     </div>
)

const mapStateToProps = createStructuredSelector({
    collections: collectionSelector
})


export default connect(mapStateToProps)(ShopPage);