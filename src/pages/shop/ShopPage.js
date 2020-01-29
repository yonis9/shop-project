import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionOvereview from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../collection/CollectionPage';

import { updateCollections } from '../../redux/shop/shop-actions'

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase';

import './ShopPage.scss';


const CollectionOvereviewWithSpinner = WithSpinner(CollectionOvereview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    }

    unSubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collection');

        collectionRef.get().then(snapshot => { 
            const collectionsMap =  convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            this.setState({loading: false})
         })
        
    }


    render (){
        const { match } = this.props;
        const { loading } = this.state;
        return  (
            <div className='shop-page'>
                <Route 
                exact path={`${match.path}`} 
                render={(props)=> <CollectionOvereviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route 
                path={`${match.path}/:collectionId`} 
                render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} />
            </div>
       )
    } 
 }


 const mapDispatchToProps = dispatch => ({
     updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
 })

export default connect(null, mapDispatchToProps)(ShopPage);