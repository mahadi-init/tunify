import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY as string,
  authDomain: "tunify-ff2b1.firebaseapp.com",
  projectId: "tunify-ff2b1",
  storageBucket: "tunify-ff2b1.appspot.com",
  messagingSenderId: "817270851411",
  appId: "1:817270851411:web:c6116340db1a43d57dc3a6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
