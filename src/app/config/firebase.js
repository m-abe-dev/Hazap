import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDH6TzGRqRAVyg2pzAP4nIPm2QpNKkjDRI",
  authDomain: "revents-da415.firebaseapp.com",
  databaseURL: "https://revents-da415.firebaseio.com",
  projectId: "revents-da415",
  storageBucket: "revents-da415.appspot.com",
  messagingSenderId: "637781623725",
  appId: "1:637781623725:web:4c434680731295e2a15724",
  measurementId: "G-6TW4FDGJEN",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
