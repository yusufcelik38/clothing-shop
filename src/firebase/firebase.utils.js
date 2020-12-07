import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
  apiKey: "AIzaSyA1kQZDEqGBMFFxOrkkAgT84CoNnRvmzxo",
  authDomain: "clothing-shop-2d6b4.firebaseapp.com",
  databaseURL: "https://clothing-shop-2d6b4.firebaseio.com",
  projectId: "clothing-shop-2d6b4",
  storageBucket: "clothing-shop-2d6b4.appspot.com",
  messagingSenderId: "379356240617",
  appId: "1:379356240617:web:c2b3eb37c3f0ce9bd06e78",
  measurementId: "G-P890T8L9V2"
};

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt':'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;
  
