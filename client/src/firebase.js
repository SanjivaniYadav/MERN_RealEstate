// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2f771.firebaseapp.com",
  projectId: "real-estate-2f771",
  storageBucket: "real-estate-2f771.appspot.com",
  messagingSenderId: "117468117649",
  appId: "1:117468117649:web:4612c15c1703804de11d30",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
