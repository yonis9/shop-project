import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import CollectionOvereview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

import { updateCollections } from '../../redux/shop/shop-actions'

import { firestore, converCollectionSnapshotToMap } from '../../firebase/firebase';

import './ShopPage.scss';


class ShopPage extends Component {

    unSubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collection');

        this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => { 
           const collectionsMap =  converCollectionSnapshotToMap(snapshot);
           updateCollections(collectionsMap)
        })
        
    }

    componentWillUnmount() {
        this.unSubscribeFromSnapshot()
    }

    render (){
        const { match } = this.props;
        return  (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOvereview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
       )
    } 
 }


 const mapDispatchToProps = dispatch => ({
     updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
 })

export default connect(null, mapDispatchToProps)(ShopPage);