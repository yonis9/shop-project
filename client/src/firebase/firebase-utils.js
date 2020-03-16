import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const config = {
    apiKey: "AIzaSyCyaVhbp577CeD1CIqgs9L64JhV8K5D8Gg",
    authDomain: "crwn-db-b1df9.firebaseapp.com",
    databaseURL: "https://crwn-db-b1df9.firebaseio.com",
    projectId: "crwn-db-b1df9",
    storageBucket: "crwn-db-b1df9.appspot.com",
    messagingSenderId: "747630886993",
    appId: "1:747630886993:web:4180c3b68fcf2006563870"
  }

  export const getUserCartRef  = async (userId) => {
      if (!userId) return;

    const cartRef = firestore.collection(`carts`).where('userId', '==', userId);
    const snapShot = await cartRef.get();
    
    if(snapShot.empty) {
        const cartDocRef = firestore.collection('carts').doc();
        await cartDocRef.set({ userId, cartItems: [] });
        return cartDocRef;
    }

    return snapShot.docs[0].ref;

  }


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
           await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;

  } 

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      const batch = firestore.batch()

      objectsToAdd.forEach(obj => {
          const newDocRef = collectionRef.doc();
          batch.set(newDocRef, obj)
      })

      return await batch.commit()
  }


export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()
        
        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items
        }
    })

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            if (!userAuth) return;
            resolve(userAuth)
        }, reject)
    })
}


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ 'prompt': 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;