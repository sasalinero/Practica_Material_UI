
//import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgvKUlL-eTeHkaCnD_qKZz-bdwPvQwRPQ",
  authDomain: "login-system-97a70.firebaseapp.com",
  projectId: "login-system-97a70",
  storageBucket: "login-system-97a70.appspot.com",
  messagingSenderId: "402015533988",
  appId: "1:402015533988:web:767f03f0d0359ae3cb9f31"
};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthPtovider();

export {auth, provider}
//const app = initializeApp(firebaseConfig);