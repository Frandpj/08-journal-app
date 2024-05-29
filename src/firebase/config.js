// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWbOVX3XzBmUUNTN-W6lJ7q1WXHLXOVmo",
    authDomain: "curso-react-c4077.firebaseapp.com",
    projectId: "curso-react-c4077",
    storageBucket: "curso-react-c4077.appspot.com",
    messagingSenderId: "1061086723422",
    appId: "1:1061086723422:web:483a149095682c4e86e3cf"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);