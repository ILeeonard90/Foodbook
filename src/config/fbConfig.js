import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAETtjBeHA90VdSvozo4Zpt3p1_24Siavg",
    authDomain: "foodbook-c15c0.firebaseapp.com",
    databaseURL: "https://foodbook-c15c0.firebaseio.com",
    projectId: "foodbook-c15c0",
    storageBucket: "foodbook-c15c0.appspot.com",
    messagingSenderId: "1030950117205"
};
firebase.initializeApp(config);
export default firebase;