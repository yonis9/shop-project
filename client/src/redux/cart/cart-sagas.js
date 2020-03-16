import { takeLatest, all, put, call, select } from 'redux-saga/effects';

import userActionTypes from '../user/user-types';
import { clearCart, setCartFromFirebase } from './cart-actions'
import { getUserCartRef  } from '../../firebase/firebase-utils'
import { cartActionsTypes } from './cart-types';
import { currentUserSelector } from '../user/user-selectors'
import { cartItemsSelector } from './cart-selectors'

export function* clearCartOnSignOut() {
        yield put(clearCart())
}

export function* getCartOnSignIn({ payload: { id } }) {
    const cartItems = yield select(cartItemsSelector);

    if (!cartItems.length) {
        const cartRef = yield call(getUserCartRef , id);
        const snapShot = yield cartRef.get();
        yield put(setCartFromFirebase(snapShot.data().cartItems));
    } else {
        yield call(updateCartInFirebase)
    }
}

export function* updateCartInFirebase() {
    const currentUser = yield select(currentUserSelector);
    
    if(currentUser) {
        try {
            const cartRef = yield call(getUserCartRef , currentUser.id);
            const cartItems = yield select(cartItemsSelector)
            cartRef.update({ cartItems })
        } catch(error) {
            console.log(error)
        }
    }
}




export function* onUserSignOut() {
    yield takeLatest(
        userActionTypes.SIGN_OUT_SUCCESS,
        clearCartOnSignOut
    )
}

export function* onUserSignIn() {
    yield takeLatest(
        userActionTypes.SIGN_IN_SUCCESS,
        getCartOnSignIn
    )
}

export function* onCartChange() {
    yield takeLatest(
        [
            cartActionsTypes.ADD_ITEM,
            cartActionsTypes.REMOVE_ITEM,
            cartActionsTypes.CLEAR_ITEM_FROM_CART,
            cartActionsTypes.CLEAR_CART
        ],
        updateCartInFirebase
    )
}

export function* cartSagas() {
    yield all([
        call(onUserSignOut),
        call(onUserSignIn),
        call(onCartChange)
    ])
}