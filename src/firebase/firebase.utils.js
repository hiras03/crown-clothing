import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';




const config = {
    apiKey: "AIzaSyBVyjhV7cyPxMpfagQVFCdaYrLDGrDorQY",
    authDomain: "crown-clothing-d1228.firebaseapp.com",
    databaseURL: "https://crown-clothing-d1228.firebaseio.com",
    projectId: "crown-clothing-d1228",
    storageBucket: "crown-clothing-d1228.appspot.com",
    messagingSenderId: "1064058373916",
    appId: "1:1064058373916:web:d38331ca57a401e9c41cd9",
    // measurementId: "G-ZEST1NW29P"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
//   firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;