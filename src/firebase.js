import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgqo-cSXgkvRMyO9tqWdwnfdo9j7k9MJM",
  authDomain: "clone-4f1cb.firebaseapp.com",
  databaseURL: "https://clone-4f1cb.firebaseio.com",
  projectId: "clone-4f1cb",
  storageBucket: "clone-4f1cb.appspot.com",
  messagingSenderId: "322546619377",
  appId: "1:322546619377:web:c6d9d0c03fe1aafbf9ea50",
  measurementId: "G-4P27SN8EJ0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)


const db = firebaseApp.firestore()  //FIRESTORE IS THE REAL-TIME DB OF FIREBASE
const auth = firebase.auth()

export {db, auth}
