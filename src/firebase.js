// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import {
    browserLocalPersistence,
} from '@firebase/auth';
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuZF8RF-xGHJuMd7dOjZ5W-erVFgxJFx8",
  authDomain: "stem-pe-roti-online.firebaseapp.com",
  projectId: "stem-pe-roti-online",
  storageBucket: "stem-pe-roti-online.appspot.com",
  messagingSenderId: "261534929781",
  appId: "1:261534929781:web:87bdfb838c958d9f6f793c",
  measurementId: "G-HVQ9MW0LB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
await auth.setPersistence(browserLocalPersistence)

export {auth, db, storage}
export default app;
