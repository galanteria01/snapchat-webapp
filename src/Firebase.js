import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCCosIqjlgzI3AyXVOb9CTv5aHPV_1rzwY",
    authDomain: "snapchat-clone-4cc43.firebaseapp.com",
    projectId: "snapchat-clone-4cc43",
    storageBucket: "snapchat-clone-4cc43.appspot.com",
    messagingSenderId: "289627527984",
    appId: "1:289627527984:web:95398a7139d4a2895046f5",
    measurementId: "G-11P6TBTFKQ"
  };

const firebaseApp = firebase.initialiseApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { database,auth,provider,storage };