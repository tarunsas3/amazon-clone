import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA07diWBdljppQerZZmPKAi-7Rakjk-0E4",
  authDomain: "clone-db587.firebaseapp.com",
  projectId: "clone-db587",
  storageBucket: "clone-db587.appspot.com",
  messagingSenderId: "288990702559",
  appId: "1:288990702559:web:23e13440c8e59e7b7a726a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
