// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl1VCQssvyIdMlwkLWfnSI7J2RjVBfnN0",
  authDomain: "e-learning-da6d5.firebaseapp.com",
  projectId: "e-learning-da6d5",
  storageBucket: "e-learning-da6d5.appspot.com",
  messagingSenderId: "148312163",
  appId: "1:148312163:web:9f0569f1aa3ac01216a856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app