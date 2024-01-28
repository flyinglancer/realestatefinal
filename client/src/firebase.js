// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2f7dd.firebaseapp.com",
  projectId: "mern-estate-2f7dd",
  storageBucket: "mern-estate-2f7dd.appspot.com",
  messagingSenderId: "756009356214",
  appId: "1:756009356214:web:7fd7401881e8d3a1000f17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);