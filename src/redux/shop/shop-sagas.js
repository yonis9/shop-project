import { takeEvery, call, put } from 'redux-saga/effects';

import { 
    firestore,
    convertCollectionSnapshotToMap
 } from '../../firebase/firebase-utils';

 import {
     fetchCollectionsSuccess,
     fetchCollectionsFailure
 } from './shop-actions'

import { shopActionsTypes } from './shop-types'

export function* fetchCollectionsAsync() {
    
    try {
        const collectionRef = firestore.collection('collection');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
       yield put(fetchCollectionsSuccess(collectionsMap))

    } catch(error) {
       yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fetchCollectionsStart() {
    yield takeEvery(
        shopActionsTypes.FETCH_COLLECTIONS_START,
         fetchCollectionsAsync
         )
}