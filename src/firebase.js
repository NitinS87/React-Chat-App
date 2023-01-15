// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiH1fq3-jkGUg3yeovREbaVV5bT1AUjq4",
  authDomain: "chat-app-525ae.firebaseapp.com",
  projectId: "chat-app-525ae",
  storageBucket: "chat-app-525ae.appspot.com",
  messagingSenderId: "980669591567",
  appId: "1:980669591567:web:628022f8d33164729ef37a",
  measurementId: "G-VVGJXYMGWZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
