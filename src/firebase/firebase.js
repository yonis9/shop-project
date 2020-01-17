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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ 'prompt': 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;