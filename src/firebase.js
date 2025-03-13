// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkgcMoz3_b2LAL_W7eRxb6zTi-IwKIpr8",
  authDomain: "ecommweb-2b797.firebaseapp.com",
  projectId: "ecommweb-2b797",
  storageBucket: "ecommweb-2b797.firebasestorage.app",
  messagingSenderId: "47096180140",
  appId: "1:47096180140:web:062cbe4222dbf2e6d2de09",
  measurementId: "G-R5ED341LBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

const analytics = getAnalytics(app);
export{db};
