import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { 
    isFtechingSelector,
    isCollectionsLoadedSelector
 } from '../../redux/shop/shop-selectors';

import { fetchCollectionsAsync } from '../../redux/shop/shop-actions';

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionOvereview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

import './ShopPage.scss';


const CollectionOvereviewWithSpinner = WithSpinner(CollectionOvereview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    }

    unSubscribeFromSnapshot = null

    componentDidMount() {
        const { fetchCollectionsAsync } = this.props;
        fetchCollectionsAsync()
        
    }


    render (){
        const { match, isCollectionFetching, isSelectionLoaded } = this.props;
        return  (
            <div className='shop-page'>
                <Route 
                exact path={`${match.path}`} 
                render={(props)=> <CollectionOvereviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
                <Route 
                path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionPageWithSpinner isLoading={!isSelectionLoaded} {...props}/>} />
            </div>
       )
    } 
 }

 const mapStateToProps = createStructuredSelector({
     isCollectionFetching: isFtechingSelector,
     isSelectionLoaded: isCollectionsLoadedSelector
 })

 const mapDispatchToProps = dispatch => ({
     fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
 })

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);