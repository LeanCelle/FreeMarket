// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAhS43XT8ml5lp_P2MS6_uTR_E8a6S5OYA",
  authDomain: "freemarket-6cca2.firebaseapp.com",
  projectId: "freemarket-6cca2",
  storageBucket: "freemarket-6cca2.appspot.com",
  messagingSenderId: "768384503854",
  appId: "1:768384503854:web:0b0c418dbbcc38786e0fbf",
  measurementId: "G-HK2RFSK1RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)  