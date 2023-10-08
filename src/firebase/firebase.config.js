// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOeGnS8_W916yESstlDVDE98rEno1T6xQ",
  authDomain: "techy-gamer-bd.firebaseapp.com",
  projectId: "techy-gamer-bd",
  storageBucket: "techy-gamer-bd.appspot.com",
  messagingSenderId: "938125515455",
  appId: "1:938125515455:web:85ae386e507f6afc34840a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;