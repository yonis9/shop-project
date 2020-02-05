import { takeLatest, put, all, call } from 'redux-saga/effects';

import { 
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser
 } from '../../firebase/firebase-utils'

import { signInSuccess, signInFailure } from './user-actions';

import userActionTypes from './user-types';

export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield createUserProfileDocument(userAuth);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
            );
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* googleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
       yield put(signInFailure(error));
    }
    
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
   yield takeLatest(
       userActionTypes.GOOGLE_SIGN_IN_START,
       googleSignIn
   )
}

export function* onEmailSignInStart() {
    yield takeLatest(
        userActionTypes.EMAIL_SIGN_IN_START,
        emailSignIn
    )
}

export function* onCheckUserSession() {
    yield takeLatest(
        userActionTypes.CHECK_USER_SESSION,
        isUserAuthenticated
    )
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession)
    ])
}