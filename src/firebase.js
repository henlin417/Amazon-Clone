import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDDHjd7lK-49sgxAFFQjejYSnuxIk60vYs",
    authDomain: "clone-8888e.firebaseapp.com",
    databaseURL: "https://clone-8888e.firebaseio.com",
    projectId: "clone-8888e",
    storageBucket: "clone-8888e.appspot.com",
    messagingSenderId: "842675588482",
    appId: "1:842675588482:web:98b5b4c75823a12267939b",
    measurementId: "G-VB6641BMP9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

