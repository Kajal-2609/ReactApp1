

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { flushSync } from "react-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf3yQVgZoI8-Epjdtz_F9M56ZGu2LfkGM",
  authDomain: "ecommnewsite.firebaseapp.com",
  projectId: "ecommnewsite",
  storageBucket: "ecommnewsite.firebasestorage.app",
  messagingSenderId: "623539833946",
  appId: "1:623539833946:web:c39900b0c88ab8fb499c63",
  measurementId: "G-V06TMP2E8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db };


