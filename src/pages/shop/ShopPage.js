import React, { Component }from 'react';
import { Route } from 'react-router-dom'

import CollectionOvereview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

import './ShopPage.scss';
const ShopPage = ({ match }) => (
     <div className='shop-page'>
         <Route exact path={`${match.path}`} component={CollectionOvereview}/>
         <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
     </div>
)


export default ShopPage;