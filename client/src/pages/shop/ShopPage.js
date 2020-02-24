import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

import CollectionOvereviewContainer from '../../components/CollectionOverview/CollectionOverview.container'
import CollectionPageContainer from '../collection/CollectionPage.container';

import { ShopPageContainer } from './ShopPage.styles.js';


const ShopPage = ({ fetchCollectionsStart, match } ) => {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])


    return  (
        <ShopPageContainer>
            <Route 
            exact path={`${match.path}`} 
            component={CollectionOvereviewContainer}/>
            <Route 
            path={`${match.path}/:collectionId`} 
            component={CollectionPageContainer} />
        </ShopPageContainer>
    )
 }


 const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
 })

export default connect(null, mapDispatchToProps)(ShopPage);