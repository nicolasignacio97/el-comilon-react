import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

import {
    GoogleAuthProvider,
    FacebookAuthProvider,
    TwitterAuthProvider,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAw6WIalJUp4YwWi-AftJ8oOxUjL8YxUwY",
    authDomain: "comilon-83112.firebaseapp.com",
    projectId: "comilon-83112",
    storageBucket: "comilon-83112.appspot.com",
    messagingSenderId: "784186373543",
    appId: "1:784186373543:web:ee18d6300666387975b282",
    measurementId: "G-2VXP7ZS01F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);


const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerTwitter = new TwitterAuthProvider();

export {
    db,
    providerGoogle,
    providerFacebook,
    providerTwitter,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
}