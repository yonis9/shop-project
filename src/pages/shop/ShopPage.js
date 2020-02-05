import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchCollectionsStart } from '../../redux/shop/shop-actions';

import CollectionOvereviewContainer from '../../components/CollectionOverview/CollectionOverview.container'
import CollectionPageContainer from '../collection/CollectionPage.container';

import './ShopPage.scss';


class ShopPage extends Component {
    state = {
        loading: true
    }


    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
        
    }


    render (){
        const { match } = this.props;
        return  (
            <div className='shop-page'>
                <Route 
                exact path={`${match.path}`} 
                component={CollectionOvereviewContainer}/>
                <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer} />
            </div>
       )
    } 
 }


 const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
 })

export default connect(null, mapDispatchToProps)(ShopPage);