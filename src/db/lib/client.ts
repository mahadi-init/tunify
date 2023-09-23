import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY as string,
  authDomain: 'tunify-7e6a7.firebaseapp.com',
  projectId: 'tunify-7e6a7',
  storageBucket: 'tunify-7e6a7.appspot.com',
  messagingSenderId: '1003900099162',
  appId: '1:1003900099162:web:65fde02cf232cbed5c1663',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
