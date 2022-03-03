
import firebase from "firebase/compat/app"
//import * as firebase from "firebase/app";
//import { initializeApp } from 'firebase/app';

//import firebase from 'firebase'
//import 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDgvKUlL-eTeHkaCnD_qKZz-bdwPvQwRPQ",
  authDomain: "login-system-97a70.firebaseapp.com",
  projectId: "login-system-97a70",
  storageBucket: "login-system-97a70.appspot.com",
  messagingSenderId: "402015533988",
  appId: "1:402015533988:web:767f03f0d0359ae3cb9f31"
};

firebase.initializeApp(firebaseConfig);
const auth= getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider}
