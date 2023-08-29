
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCIejZW_r35h1KXlmQmohYIglM5zcN4yto",
  authDomain: "mrcomputerlabt.firebaseapp.com",
  projectId: "mrcomputerlabt",
  storageBucket: "mrcomputerlabt.appspot.com",
  messagingSenderId: "1069606943871",
  appId: "1:1069606943871:web:1f55474fe3ec410760134a",
  measurementId: "G-HJN76RBCXM"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app); 