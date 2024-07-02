// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXtLyl6PJsf_SbH-_Gbli1UxbI6l95paI",
  authDomain: "car-doctor-f2b62.firebaseapp.com",
  projectId: "car-doctor-f2b62",
  storageBucket: "car-doctor-f2b62.appspot.com",
  messagingSenderId: "103131086585",
  appId: "1:103131086585:web:f3f9fd089368654d6e2c28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;