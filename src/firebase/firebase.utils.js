import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;