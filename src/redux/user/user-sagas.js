import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
    auth,
    googleProvider,
    createUserProfileDocument
 } from '../../firebase/firebase-utils'

import { googleSignInSuccess, googleSignInFailure } from './user-actions';

import userActionTypes from './user-types';


export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userRef = yield createUserProfileDocument(user);
        const userSnapshot = yield userRef.get();
        yield put(
            googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
            );
    } catch(error) {
       yield put(googleSignInFailure(error))
    }
    
}

export function* googleSignInStart() {
   yield takeLatest(
       userActionTypes.GOOGLE_SIGN_IN_START,
       googleSignIn
   )
}

export function* userSagas() {
    yield all([call(googleSignInStart)])
}