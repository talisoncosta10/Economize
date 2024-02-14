// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw2q5mh7TXEK0JTA734dJMGtaAfCF6HCo",
  authDomain: "economize-65869.firebaseapp.com",
  projectId: "economize-65869",
  storageBucket: "economize-65869.appspot.com",
  messagingSenderId: "466429886228",
  appId: "1:466429886228:web:a3e63f7276255b5c710c01",
  measurementId: "G-J17CB8GEBE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestoreAPI = getFirestore(app);
