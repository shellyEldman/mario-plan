import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCGuBjAfUNpdbqO665YsURn3VbIN3jm7X4",
    authDomain: "mario-shelly.firebaseapp.com",
    databaseURL: "https://mario-shelly.firebaseio.com",
    projectId: "mario-shelly",
    storageBucket: "mario-shelly.appspot.com",
    messagingSenderId: "969575151563",
    appId: "1:969575151563:web:30e9666b04c7e494"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;