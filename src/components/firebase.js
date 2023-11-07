// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import{getAuth} from "firebase/auth";
import{getFirestore} from "firebase/firestore";
import{getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6uzVP5OIx-Vr5LFvhZ2b9HfZ6KP8N6bQ",
  authDomain: "appreact-618f3.firebaseapp.com",
  projectId: "appreact-618f3",
  storageBucket: "appreact-618f3.appspot.com",
  messagingSenderId: "954320181174",
  appId: "1:954320181174:web:f19df3ca4b91fdbb7a5317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);