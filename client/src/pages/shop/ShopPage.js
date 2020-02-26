import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

import Spinner from '../../components/Spinner/Spinner';

import { ShopPageContainer } from './ShopPage.styles.js';

const CollectionOvereviewContainer = lazy(() => import('../../components/CollectionOverview/CollectionOverview.container'));
const CollectionPageContainer = lazy(() => import('../collection/CollectionPage.container'));


const ShopPage = ({ fetchCollectionsStart, match } ) => {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])


    return  (
        <ShopPageContainer>
            <Suspense fallback={<Spinner />}>
                <Route 
                exact path={`${match.path}`} 
                component={CollectionOvereviewContainer}/>
                <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer} />
            </Suspense>
        </ShopPageContainer>
    )
 }


 const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
 })

export default connect(null, mapDispatchToProps)(ShopPage);