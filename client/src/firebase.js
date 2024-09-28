// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-3e246.firebaseapp.com",
  projectId: "mern-blog-3e246",
  storageBucket: "mern-blog-3e246.appspot.com",
  messagingSenderId: "1080064372897",
  appId: "1:1080064372897:web:dc4ab96fa2f328818240e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);