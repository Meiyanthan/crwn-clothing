import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD9EFtM0M8L1pR0IpX88i9eo-kcajXDCKI",
    authDomain: "crwn-db-e2e13.firebaseapp.com",
    projectId: "crwn-db-e2e13",
    storageBucket: "crwn-db-e2e13.appspot.com",
    messagingSenderId: "169535083487",
    appId: "1:169535083487:web:62c1c7d1ed5b047edbea6a",
    measurementId: "G-LW9DLVZJX5"
  };


  firebase.initializeApp(config);
  export const auth =  firebase.auth();
  export const firestore =  firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ 'prompt': 'select_account' });
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


  